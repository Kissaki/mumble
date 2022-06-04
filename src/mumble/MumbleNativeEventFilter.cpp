// Copyright 2014-2022 The Mumble Developers. All rights reserved.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file at the root of the
// Mumble source tree or at <https://www.mumble.info/LICENSE>.

#include "MumbleNativeEventFilter.h"

#ifdef Q_OS_WIN
#	include "GlobalShortcut.h"
#	include "GlobalShortcut_win.h"

bool MumbleApplication::nativeEventFilter(const QByteArray &, void *message, long *) {
	auto gsw = static_cast< GlobalShortcutWin * >(GlobalShortcutEngine::engine);
	if (!gsw) {
		return false;
	}

	auto msg = reinterpret_cast< const MSG * >(message);
	switch (msg->message) {
		case WM_INPUT:
			gsw->injectRawInputMessage(reinterpret_cast< HRAWINPUT >(msg->lParam));
			break;
		case WM_INPUT_DEVICE_CHANGE:
			// We don't care about GIDC_ARRIVAL because we add a device only when we receive input from it.
			if (msg->wParam == GIDC_REMOVAL) {
				// The device is not available anymore, free resources allocated for it.
				gsw->deviceRemoved(reinterpret_cast< const HANDLE >(msg->lParam));
			}
	}

	return false;
}
#endif
