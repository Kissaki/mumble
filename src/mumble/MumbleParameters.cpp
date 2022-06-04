// Copyright 2014-2022 The Mumble Developers. All rights reserved.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file at the root of the
// Mumble source tree or at <https://www.mumble.info/LICENSE>.

#include "MumbleParameters.h"

MumbleParameters::MumbleParameters() {
	parse();
}

void MumbleParameters::parse() {
	if (a.arguments().count() > 1) {
		for (int i = 1; i < args.count(); ++i) {
			if (args.at(i) == QLatin1String("-h") || args.at(i) == QLatin1String("--help")
#if defined(Q_OS_WIN)
				|| args.at(i) == QLatin1String("/?")
#endif
			) {
				QString helpMessage =
					MainWindow::tr("Usage: mumble [options] [<url> | <plugin_list>]\n"
								   "\n"
								   "<url> specifies a URL to connect to after startup instead of showing\n"
								   "the connection window, and has the following form:\n"
								   "mumble://[<username>[:<password>]@]<host>[:<port>][/<channel>[/"
								   "<subchannel>...]][?version=<x.y.z>]\n"
								   "\n"
								   "<plugin_list> is a list of plugin files that shall be installed"
								   "\n"
								   "The version query parameter has to be set in order to invoke the\n"
								   "correct client version. It currently defaults to 1.2.0.\n"
								   "\n"
								   "Valid options are:\n"
								   "  -h, --help    Show this help text and exit.\n"
								   "  -V, --version Print version information and exit\n"
								   "  -m, --multiple\n"
								   "                Allow multiple instances of the client to be started.\n"
								   "  -c, --config\n"
								   "                Specify an alternative configuration file.\n"
								   "                If you use this to run multiple instances of Mumble at once,\n"
								   "                make sure to set an alternative 'database' value in the config.\n"
								   "  --default-certificate-dir <dir>\n"
								   "                Specify an alternative default certificate path.\n"
								   "                This path is only used if there is no certificate loaded\n"
								   "                from the settings.\n"
								   "  -n, --noidentity\n"
								   "                Suppress loading of identity files (i.e., certificates.)\n"
								   "  -jn, --jackname <arg>\n"
								   "                Set custom Jack client name.\n"
								   "  --license\n"
								   "                Show the Mumble license.\n"
								   "  --authors\n"
								   "                Show the Mumble authors.\n"
								   "  --third-party-licenses\n"
								   "                Show licenses for third-party software used by Mumble.\n"
								   "  --window-title-ext <arg>\n"
								   "                Sets a custom window title extension.\n"
								   "  --dump-input-streams\n"
								   "                Dump PCM streams at various parts of the input chain\n"
								   "                (useful for debugging purposes)\n"
								   "                - raw microphone input\n"
								   "                - speaker readback for echo cancelling\n"
								   "                - processed microphone input\n"
								   "  --print-echocancel-queue\n"
								   "                Print on stdout the echo cancellation queue state\n"
								   "                (useful for debugging purposes)\n"
								   "  --translation-dir <dir>\n"
								   "                Specifies an additional translation fir <dir> in which\n"
								   "                Mumble will search for translation files that overwrite\n"
								   "                the bundled ones\n"
								   "                Directories added this way have higher priority than\n"
								   "                the default locations used otherwise\n"
								   "  --print-translation-dirs\n"
								   "                Print out the paths in which Mumble will search for\n"
								   "                translation files that overwrite the bundled ones.\n"
								   "                (Useful for translators testing their translations)\n"
								   "  --locale <locale>\n"
								   "                Overwrite the locale in Mumble's settings with a\n"
								   "                locale that corresponds to the given locale string.\n"
								   "                If the format is invalid, Mumble will error.\n"
								   "                Otherwise the locale will be permanently saved to\n"
								   "                Mumble's settings."
								   "\n");
				QString rpcHelpBanner = MainWindow::tr("Remote controlling Mumble:\n"
													   "\n");
				QString rpcHelpMessage =
					MainWindow::tr("Usage: mumble rpc <action> [options]\n"
								   "\n"
								   "It is possible to remote control a running instance of Mumble by using\n"
								   "the 'mumble rpc' command.\n"
								   "\n"
								   "Valid actions are:\n"
								   "  mute\n"
								   "                Mute self\n"
								   "  unmute\n"
								   "                Unmute self\n"
								   "  togglemute\n"
								   "                Toggle self-mute status\n"
								   "  deaf\n"
								   "                Deafen self\n"
								   "  undeaf\n"
								   "                Undeafen self\n"
								   "  toggledeaf\n"
								   "                Toggle self-deafen status\n"
								   "  starttalking\n"
								   "                Start talking\n"
								   "  stoptalking\n"
								   "                Stop talking\n"
								   "\n");

				QString helpOutput = helpMessage + rpcHelpBanner + rpcHelpMessage;
				if (bRpcMode) {
					helpOutput = rpcHelpMessage;
				}

#if defined(Q_OS_WIN)
				QMessageBox::information(nullptr, MainWindow::tr("Invocation"), helpOutput);
#else
				printf("%s", qPrintable(helpOutput));
#endif
				return 1;
			} else if (args.at(i) == QLatin1String("-m") || args.at(i) == QLatin1String("--multiple")) {
				bAllowMultiple = true;
			} else if (args.at(i) == QLatin1String("-n") || args.at(i) == QLatin1String("--noidentity")) {
				suppressIdentity                  = true;
				Global::get().s.bSuppressIdentity = true;
			} else if (args.at(i) == QLatin1String("-jn") || args.at(i) == QLatin1String("--jackname")) {
				if (i + 1 < args.count()) {
					Global::get().s.qsJackClientName = QString(args.at(i + 1));
					customJackClientName             = true;
					++i;
				} else {
					qCritical("Missing argument for --jackname!");
					return 1;
				}
			} else if (args.at(i) == QLatin1String("--window-title-ext")) {
				if (i + 1 < args.count()) {
					Global::get().windowTitlePostfix = QString(args.at(i + 1));
					++i;
				} else {
					qCritical("Missing argument for --window-title-ext!");
					return 1;
				}
			} else if (args.at(i) == QLatin1String("-license") || args.at(i) == QLatin1String("--license")) {
				printf("%s\n", qPrintable(License::license()));
				return 0;
			} else if (args.at(i) == QLatin1String("-authors") || args.at(i) == QLatin1String("--authors")) {
				printf("%s\n", qPrintable(License::authors()));
				return 0;
			} else if (args.at(i) == QLatin1String("-third-party-licenses")
					   || args.at(i) == QLatin1String("--third-party-licenses")) {
				printf("%s", qPrintable(License::printableThirdPartyLicenseInfo()));
				return 0;
			} else if (args.at(i) == QLatin1String("rpc")) {
				bRpcMode = true;
				if (args.count() - 1 > i) {
					rpcCommand = QString(args.at(i + 1));
				} else {
					QString rpcError = MainWindow::tr("Error: No RPC command specified");
#if defined(Q_OS_WIN)
					QMessageBox::information(nullptr, MainWindow::tr("RPC"), rpcError);
#else
					printf("%s\n", qPrintable(rpcError));
#endif
					return 1;
				}
			} else if (args.at(i) == QLatin1String("--dump-input-streams")) {
				Global::get().bDebugDumpInput = true;
			} else if (args.at(i) == QLatin1String("--print-echocancel-queue")) {
				Global::get().bDebugPrintQueue = true;
			} else if (args.at(i) == QLatin1String("-c") || args.at(i) == QLatin1String("--config")) {
				//	We already parsed these arguments above, so just skip over them here
				++i;
			} else if (args.at(i) == QLatin1String("--default-certificate-dir")) {
				if (i + 1 < args.count()) {
					qdCert = QDir(args.at(i + 1));
					// I suppose we should really be checking whether the directory is writable here too,
					// but there are some subtleties with doing that:
					// (doc.qt.io/qt-5/qfile.html#platform-specific-issues)
					// so we can just let things fail down below when this directory is used.
					if (!qdCert.exists()) {
						printf("%s", qPrintable(MainWindow::tr("Directory %1 does not exist.\n").arg(args.at(i + 1))));
						return 1;
					}
					++i;
				} else {
					qCritical("Missing argument for --default-certificate-dir!");
					return 1;
				}
			} else if (args.at(i) == "--print-translation-dirs") {
				printTranslationDirs = true;
			} else if (args.at(i) == "--translation-dir") {
				if (i + 1 < args.count()) {
					extraTranslationDirs.append(args.at(i + 1));
					i++;
				} else {
					qCritical("Missing argument for --translation-dir!");
					return 1;
				}
			} else if (args.at(i) == "--locale") {
				if (i + 1 < args.count()) {
					localeOverwrite = args.at(i + 1);
					i++;
				} else {
					qCritical("Missing argument for --locale!");
					return 1;
				}
			} else if (args.at(i) == "--version" || args.at(i) == "-V") {
				// Print version and exit (print to regular std::cout to avoid adding any useless meta-information
				// from using e.g. qWarning
				std::cout << "Mumble version " << Version::toString(Version::getRaw()).toStdString() << std::endl;
				return 0;
			} else {
				if (PluginInstaller::canBePluginFile(args.at(i))) {
					pluginsToBeInstalled << args.at(i);
				} else {
					if (!bRpcMode) {
						QUrl u = QUrl::fromEncoded(args.at(i).toUtf8());
						if (u.isValid() && (u.scheme() == QLatin1String("mumble"))) {
							url = u;
						} else {
							QFile f(args.at(i));
							if (f.exists()) {
								url = QUrl::fromLocalFile(f.fileName());
							}
						}
					}
				}
			}
		}
	}
}
