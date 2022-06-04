// Copyright 2014-2022 The Mumble Developers. All rights reserved.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file at the root of the
// Mumble source tree or at <https://www.mumble.info/LICENSE>.

#include "MumbleApplication.h"

#include "EnvUtils.h"
#include "MainWindow.h"
#include "Global.h"

#include <QtGui/QFileOpenEvent>

MumbleApplication *MumbleApplication::instance() {
	return static_cast< MumbleApplication * >(QCoreApplication::instance());
}

MumbleApplication::MumbleApplication(int &pargc, char **pargv) : QApplication(pargc, pargv) {
	connect(this, SIGNAL(commitDataRequest(QSessionManager &)), SLOT(onCommitDataRequest(QSessionManager &)),
			Qt::DirectConnection);
	setApplicationName(QLatin1String("Mumble"));
	setOrganizationName(QLatin1String("Mumble"));
	setOrganizationDomain(QLatin1String("mumble.sourceforge.net"));
	setQuitOnLastWindowClosed(false);

#if QT_VERSION >= 0x050700
	a.setDesktopFileName("info.mumble.Mumble");
#endif

#if QT_VERSION >= 0x050100
	a.setAttribute(Qt::AA_UseHighDpiPixmaps);
#endif

#ifdef Q_OS_WIN
	installNativeEventFilter(new MumbleNativeEventFilter(this));
#endif
}

void MumbleApplication::installNativeEventFilter() {

}

QString MumbleApplication::applicationVersionRootPath() {
	QString versionRoot = EnvUtils::getenv(QLatin1String("MUMBLE_VERSION_ROOT"));
	if (versionRoot.count() > 0) {
		return versionRoot;
	}
	return this->applicationDirPath();
}

void MumbleApplication::onCommitDataRequest(QSessionManager &) {
	// Make sure the config is saved and suppress the ask on quit message
	if (Global::get().mw) {
		Global::get().s.mumbleQuitNormally = true;
		Global::get().s.save();
		Global::get().mw->bSuppressAskOnQuit = true;
		qWarning() << "Session likely ending. Suppressing ask on quit";
	}
}

bool MumbleApplication::event(QEvent *e) {
	if (e->type() == QEvent::FileOpen) {
		QFileOpenEvent *foe = static_cast< QFileOpenEvent * >(e);
		if (!Global::get().mw) {
			this->quLaunchURL = foe->url();
		} else {
			Global::get().mw->openUrl(foe->url());
		}
		return true;
	}
	return QApplication::event(e);
}
