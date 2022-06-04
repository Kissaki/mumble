// Copyright 2014-2022 The Mumble Developers. All rights reserved.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file at the root of the
// Mumble source tree or at <https://www.mumble.info/LICENSE>.

#ifndef MUMBLE_MUMBLE_MUMBLENATIVEEVENTFILTER_H
#define MUMBLE_MUMBLE_MUMBLENATIVEEVENTFILTER_H

#ifdef Q_OS_WIN
#	include <QAbstractNativeEventFilter>

/**
 * @brief Forwards specific messages to the global shortcut engine.
 */
class MumbleNativeEventFilter : public QAbstractNativeEventFilter {
	Q_OBJECT
public:
	bool nativeEventFilter(const QByteArray &eventType, void *message, long *result) Q_DECL_OVERRIDE;
};
#endif

#endif // MUMBLE_MUMBLE_MUMBLENATIVEEVENTFILTER_H
