// Copyright 2005-2017 The Mumble Developers. All rights reserved.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file at the root of the
// Mumble source tree or at <https://www.mumble.info/LICENSE>.

#include "mumble_pch.hpp"

#include "ServerWelcomeEdit.h"

#include "Global.h"
#include "ServerHandler.h"
#include "Mumble.pb.h"
#include "RichTextEditor.h"

ServerWelcomeEdit::ServerWelcomeEdit(const QString &text, QWidget *p)
    : QDialog(p) {
	setupUi(this);

	rteText->setText(text);
}

void ServerWelcomeEdit::accept() {
	using MumbleProto::ServerConfig;
	ServerConfig msg;
	msg.set_welcome_text(rteText->text().toStdString());
	g.sh->sendMessage(msg);

	QDialog::accept();
}
