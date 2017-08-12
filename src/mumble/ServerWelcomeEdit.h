// Copyright 2005-2017 The Mumble Developers. All rights reserved.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file at the root of the
// Mumble source tree or at <https://www.mumble.info/LICENSE>.

#ifndef MUMBLE_MUMBLE_SERVERWELCOMEEDIT_H_
#define MUMBLE_MUMBLE_SERVERWELCOMEEDIT_H_

#include "ui_ServerWelcomeEdit.h"

///
/// Dialog for displaying and editing the servers welcome message.
///
class ServerWelcomeEdit : public QDialog, public Ui::ServerWelcomeEdit {
		Q_OBJECT
		Q_DISABLE_COPY(ServerWelcomeEdit)
	public:
		ServerWelcomeEdit(const QString &text, QWidget *p = NULL);

	public slots:
		void accept() Q_DECL_OVERRIDE;
};

#endif
