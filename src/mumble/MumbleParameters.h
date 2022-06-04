// Copyright 2014-2022 The Mumble Developers. All rights reserved.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file at the root of the
// Mumble source tree or at <https://www.mumble.info/LICENSE>.

#ifndef MUMBLE_MUMBLE_MUMBLEPARAMETERS_H
#define MUMBLE_MUMBLE_MUMBLEPARAMETERS_H

/**
 * @brief Forwards specific messages to the global shortcut engine.
 */
class MumbleParameters : public QObject {
	Q_OBJECT
public:
	bool bAllowMultiple       = false;
	bool suppressIdentity     = false;
	bool customJackClientName = false;
	bool bRpcMode             = false;
	bool printTranslationDirs = false;
	QString rpcCommand;
	QUrl url;
	QDir qdCert(QStandardPaths::writableLocation(QStandardPaths::DocumentsLocation));
	QStringList extraTranslationDirs;
	QString localeOverwrite;

	QStringList pluginsToBeInstalled;

	MumbleParameters();

	void parse();
};
#endif

#endif // MUMBLE_MUMBLE_MUMBLEPARAMETERS_H
