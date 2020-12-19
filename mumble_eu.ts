# Copyright 2019-2020 The Mumble Developers. All rights reserved.
# Use of this source code is governed by a BSD-style license
# that can be found in the LICENSE file at the root of the
# Mumble source tree or at <https://www.mumble.info/LICENSE>.

set(MUMBLE_RC "${CMAKE_CURRENT_BINARY_DIR}/mumble.rc")
set(MUMBLE_DLL_RC "${CMAKE_CURRENT_BINARY_DIR}/mumble_dll.rc")
set(MUMBLE_PLIST "${CMAKE_CURRENT_BINARY_DIR}/mumble.plist")

set(MUMBLE_ICON "${CMAKE_SOURCE_DIR}/icons/mumble.ico")
set(MUMBLE_ICNS "${CMAKE_SOURCE_DIR}/icons/mumble.icns")

configure_file("${CMAKE_CURRENT_SOURCE_DIR}/mumble.rc.in" "${MUMBLE_RC}")
configure_file("${CMAKE_CURRENT_SOURCE_DIR}/mumble_dll.rc.in" "${MUMBLE_DLL_RC}")
configure_file("${CMAKE_CURRENT_SOURCE_DIR}/mumble.plist.in" "${MUMBLE_PLIST}")

include(qt-utils)
include(install-library)

option(update "Check for updates by default." ON)

option(translations "Include languages other than English." ON)

option(classic-theme "Include the classic theme." ON)

option(bundled-opus "Build the included version of Opus instead of looking for one on the system." ON)
option(bundled-celt "Build the included version of CELT instead of looking for one on the system." ON)
option(bundled-speex "Build the included version of Speex instead of looking for one on the system." ON)
option(rnnoise "Build RNNoise for machine learning noise reduction" ON)

option(manual-plugin "Include the built-in \"manual\" positional audio plugin." ON)

option(qtspeech "Use Qt's text-to-speech system (part of the Qt Speech module) instead of Mumble's own OS-specific text-to-speech implementations." OFF)

option(jackaudio "Build support for JackAudio." ON)
option(portaudio "Build support for PortAudio" ON)

if(WIN32)
	option(asio "Build support for ASIO audio input." OFF)
	option(wasapi "Build support for WASAPI." ON)
	option(xboxinput "Build support for global shortcuts from Xbox controllers via the XInput DLL." ON)
	option(gkey "Build support for Logitech G-Keys. Note: This feature does not require any build-time dependencies, and requires Logitech Gaming Software to be installed to have any effect at runtime." ON)
elseif(UNIX)
	if(APPLE)
		option(coreaudio "Build support for CoreAudio." ON)
	elseif(${CMAKE_SYSTEM_NAME} STREQUAL "FreeBSD")
		option(oss "Build support for OSS." ON)
	elseif(${CMAKE_SYSTEM_NAME} STREQUAL "Linux")
		option(alsa "Build support for ALSA." ON)
		option(pulseaudio "Build support for PulseAudio." ON)
		option(speechd "Build support for Speech Dispatcher." ON)
		option(xinput2 "Build support for XI2" ON)
	endif()
endif()

if(NOT APPLE)
	option(g15 "Include support for the G15 keyboard (and compatible devices)." OFF)
endif()

if(WIN32 OR APPLE)
	option(crash-report "Include support for reporting crashes to the Mumble developers." ON)
endif()

if(MSVC)
	option(elevation "Set \"uiAccess=true\", required for global shortcuts to work with privileged applications. Requires the client's executable to be signed with a trusted code signing certificate." OFF)
endif()

find_pkg(Qt5
	COMPONENTS
		Concurrent
		Sql
		Svg
		Widgets
	REQUIRED
)

set(MUMBLE_SOURCES
	"main.cpp"
	"About.cpp"
	"About.h"
	"ACLEditor.cpp"
	"ACLEditor.h"
	"ACLEditor.ui"
	"ApplicationPalette.h"
	"AudioConfigDialog.cpp"
	"AudioConfigDialog.h"
	"Audio.cpp"
	"Audio.h"
	"AudioInput.cpp"
	"AudioInput.h"
	"AudioInput.ui"
	"AudioOutput.cpp"
	"AudioOutput.h"
	"AudioOutputSample.cpp"
	"AudioOutputSample.h"
	"AudioOutputSpeech.cpp"
	"AudioOutputSpeech.h"
	"AudioOutput.ui"
	"AudioOutputUser.cpp"
	"AudioOutputUser.h"
	"AudioStats.cpp"
	"AudioStats.h"
	"AudioStats.ui"
	"AudioWizard.cpp"
	"AudioWizard.h"
	"AudioWizard.ui"
	"BanEditor.cpp"
	"BanEditor.h"
	"BanEditor.ui"
	"CELTCodec.cpp"
	"CELTCodec.h"
	"Cert.cpp"
	"Cert.h"
	"Cert.ui"
	"ClientUser.cpp"
	"ClientUser.h"
	"ConfigDialog.cpp"
	"ConfigDialog.h"
	"ConfigDialog.ui"
	"ConfigWidget.cpp"
	"ConfigWidget.h"
	"ConnectDialog.cpp"
	"ConnectDialogEdit.ui"
	"ConnectDialog.h"
	"ConnectDialog.ui"
	"CustomElements.cpp"
	"CustomElements.h"
	"Database.cpp"
	"Database.h"
	"DeveloperConsole.cpp"
	"DeveloperConsole.h"
	"Global.cpp"
	"Global.h"
	"GlobalShortcut.cpp"
	"GlobalShortcut.h"
	"GlobalShortcutTarget.ui"
	"GlobalShortcut.ui"
	"LCD.cpp"
	"LCD.h"
	"LCD.ui"
	"ListenerLocalVolumeDialog.cpp"
	"Log.cpp"
	"Log.h"
	"Log.ui"
	"LookConfig.cpp"
	"LookConfig.h"
	"LookConfig.ui"
	"MainWindow.cpp"
	"MainWindow.h"
	"MainWindow.ui"
	"Markdown.cpp"
	"Markdown.h"
	"Messages.cpp"
	"MumbleApplication.cpp"
	"MumbleApplication.h"
	"NetworkConfig.cpp"
	"NetworkConfig.h"
	"NetworkConfig.ui"
	"OpusCodec.cpp"
	"OpusCodec.h"
	"Plugins.cpp"
	"Plugins.h"
	"Plugins.ui"
	"PTTButtonWidget.cpp"
	"PTTButtonWidget.h"
	"PTTButtonWidget.ui"
	"RichTextEditor.cpp"
	"RichTextEditor.h"
	"RichTextEditorLink.ui"
	"RichTextEditor.ui"
	"Screen.cpp"
	"Screen.h"
	"ServerHandler.cpp"
	"ServerHandler.h"
	"Settings.cpp"
	"Settings.h"
	"SharedMemory.cpp"
	"SharedMemory.h"
	"SocketRPC.cpp"
	"SocketRPC.h"
	"SvgIcon.cpp"
	"SvgIcon.h"
	"TalkingUI.cpp"
	"TalkingUI.h"
	"TalkingUIContainer.cpp"
	"TalkingUIContainer.h"
	"TalkingUIEntry.cpp"
	"TalkingUIEntry.h"
	"TalkingUISelection.cpp"
	"TalkingUISelection.h"
	"TextMessage.cpp"
	"TextMessage.h"
	"TextMessage.ui"
	"TextToSpeech.h"
	"ThemeInfo.cpp"
	"ThemeInfo.h"
	"Themes.cpp"
	"Themes.h"
	"Tokens.cpp"
	"Tokens.h"
	"Tokens.ui"
	"Usage.cpp"
	"Usage.h"
	"UserEdit.cpp"
	"UserEdit.h"
	"UserEdit.ui"
	"UserInformation.cpp"
	"UserInformation.h"
	"UserInformation.ui"
	"UserListModel.cpp"
	"UserListModel.h"
	"UserLocalVolumeDialog.cpp"
	"UserLocalVolumeDialog.h"
	"UserLocalVolumeDialog.ui"
	"UserModel.cpp"
	"UserModel.h"
	"UserView.cpp"
	"UserView.h"
	"VersionCheck.cpp"
	"VersionCheck.h"
	"ViewCert.cpp"
	"ViewCert.h"
	"VoiceRecorder.cpp"
	"VoiceRecorderDialog.cpp"
	"VoiceRecorderDialog.h"
	"VoiceRecorderDialog.ui"
	"VoiceRecorder.h"
	"WebFetch.cpp"
	"WebFetch.h"
	"XMLTools.cpp"
	"XMLTools.h"

	"widgets/MUComboBox.cpp"
	"widgets/MUComboBox.h"

	"${SHARED_SOURCE_DIR}/ACL.cpp"
	"${SHARED_SOURCE_DIR}/ACL.h"
	"${SHARED_SOURCE_DIR}/Channel.cpp"
	"${SHARED_SOURCE_DIR}/Channel.h"
	"${SHARED_SOURCE_DIR}/ChannelListener.cpp"
	"${SHARED_SOURCE_DIR}/ChannelListener.h"
	"${SHARED_SOURCE_DIR}/Connection.cpp"
	"${SHARED_SOURCE_DIR}/Connection.h"
	"${SHARED_SOURCE_DIR}/Group.cpp"
	"${SHARED_SOURCE_DIR}/Group.h"
	"${SHARED_SOURCE_DIR}/SignalCurry.h"

	"${3RDPARTY_DIR}/smallft/smallft.cpp"

	"mumble.qrc"
	"flags/mumble_flags_0.qrc"
	"${CMAKE_SOURCE_DIR}/themes/MumbleTheme.qrc"
)

if(static AND WIN32)
	# On Windows, building a static client means building the main app into a DLL.
	add_library(mumble SHARED ${MUMBLE_SOURCES})
	add_compile_definitions(mumble PRIVATE "MUMBLEAPP_DLL")

	set_target_properties(mumble PROPERTIES OUTPUT_NAME "mumble_app")
	if(MINGW)
		# Remove "lib" prefix.
		set_target_properties(mumble PROPERTIES PREFIX "")
	endif()

	target_sources(mumble PRIVATE "${MUMBLE_DLL_RC}")

	add_subdirectory("${SHARED_SOURCE_DIR}/mumble_exe" "${CMAKE_BINARY_DIR}/mumble_exe")
else()
	add_executable(mumble ${MUMBLE_SOURCES})

	if(WIN32)
		target_sources(mumble
			PRIVATE
				"mumble.appcompat.manifest"
				"${MUMBLE_RC}"
		)

		if(elevation)
			set_property(TARGET mumble APPEND_STRING PROPERTY LINK_FLAGS " /MANIFESTUAC:\"level=\'asInvoker\' uiAccess=\'true\'\"")
		endif()
	elseif(APPLE)
		set_target_properties(mumble
			PROPERTIES
				OUTPUT_NAME "Mumble"
				MACOSX_BUNDLE TRUE
				RESOURCE ${MUMBLE_ICNS}
				MACOSX_BUNDLE_INFO_PLIST ${MUMBLE_PLIST}
		)
	endif()
endif()

target_compile_definitions(mumble
	PRIVATE
		"MUMBLE_LIBRARY_PATH=${MUMBLE_INSTALL_LIBDIR}"
		"MUMBLE_PLUGIN_PATH=${MUMBLE_INSTALL_PLUGINDIR}"
)

set_target_properties(mumble
	PROPERTIES
		AUTOMOC ON
		AUTORCC ON
		AUTOUIC ON
		RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}
)

if(WIN32)
	install(TARGETS mumble RUNTIME DESTINATION "${MUMBLE_INSTALL_EXECUTABLEDIR}" COMPONENT mumble_client)
else()
	if(NOT APPLE)
		install(TARGETS mumble RUNTIME DESTINATION "${MUMBLE_INSTALL_EXECUTABLEDIR}" COMPONENT mumble_client)
	else()
		install(TARGETS mumble BUNDLE DESTINATION "${MUMBLE_INSTALL_EXECUTABLEDIR}" COMPONENT mumble_client)
	endif()

	# Install Mumble man files
	install(FILES "${CMAKE_SOURCE_DIR}/man/mumble.1" DESTINATION "${MUMBLE_INSTALL_MANDIR}" COMPONENT doc)
endif()

target_compile_definitions(mumble
	PRIVATE
		"MUMBLE"
		"USE_OPUS"
		"QT_RESTRICTED_CAST_FROM_ASCII"
)

target_include_directories(mumble
	PRIVATE
		${CMAKE_CURRENT_SOURCE_DIR} # This is required for includes in current folder to be found by files from the shared directory.
		"widgets"
		${SHARED_SOURCE_DIR}
		"${3RDPARTY_DIR}/smallft"
)

find_pkg("LibSndFile;sndfile" REQUIRED)

if(static AND TARGET sndfile-static)
	target_link_libraries(mumble PRIVATE sndfile-static)
elseif(TARGET sndfile)
	target_link_libraries(mumble PRIVATE sndfile)
else()
	target_link_libraries(mumble PRIVATE ${sndfile_LIBRARIES})
endif()

target_link_libraries(mumble
	PRIVATE
		shared
		Qt5::Concurrent
		Qt5::Sql
		Qt5::Svg
		Qt5::Widgets
)

if(static)
	if(TARGET Qt5::QSQLiteDriverPlugin)
		include_qt_plugin(mumble PRIVATE "QSQLiteDriverPlugin")
		target_link_libraries(mumble PRIVATE Qt5::QSQLiteDriverPlugin)
	endif()
	if(TARGET Qt5::QSvgIconPlugin)
		include_qt_plugin(mumble PRIVATE "QSvgIconPlugin")
		target_link_libraries(mumble PRIVATE Qt5::QSvgIconPlugin)
	endif()
	if(TARGET Qt5::QSvgPlugin)
		include_qt_plugin(mumble PRIVATE "QSvgPlugin")
		target_link_libraries(mumble PRIVATE Qt5::QSvgPlugin)
	endif()
endif()

if(MSVC)
	target_compile_definitions(mumble PRIVATE "RESTRICT=")
else()
	target_compile_definitions(mumble PRIVATE "RESTRICT=__restrict__")
endif()

if(WIN32)
	target_sources(mumble PRIVATE
		"GlobalShortcut_win.cpp"
		"GlobalShortcut_win.h"
		"Log_win.cpp"
		"SharedMemory_win.cpp"
		"TaskList.cpp"
		"UserLockFile_win.cpp"
		"WinGUIDs.cpp"
		"os_early_win.cpp"
		"os_win.cpp"

		"${CMAKE_SOURCE_DIR}/overlay/ods.cpp"
	)

	find_pkg(Boost
		COMPONENTS
			system
			thread
		REQUIRED
	)

	if(static AND TARGET Qt5::QWindowsIntegrationPlugin)
		include_qt_plugin(mumble PRIVATE QWindowsIntegrationPlugin)
		target_link_libraries(mumble PRIVATE Qt5::QWindowsIntegrationPlugin)
	endif()

	add_subdirectory("${3RDPARTY_DIR}/xinputcheck-build" "${CMAKE_CURRENT_BINARY_DIR}/xinputcheck")

	# Disable all warnings that the xinputcheck code may emit
	disable_warnings_for_all_targets_in("${3RDPARTY_DIR}/xinputcheck-build")

	target_link_libraries(mumble PRIVATE xinputcheck)

	if(MSVC)
		target_link_libraries(mumble
			PRIVATE
				Boost::dynamic_linking
				Delayimp.lib
			)
		set_property(TARGET mumble APPEND_STRING PROPERTY LINK_FLAGS " /DELAYLOAD:user32.dll /DELAYLOAD:qwave.dll")
	endif()

	target_link_libraries(mumble
		PRIVATE
			Boost::system
			Boost::thread
	)

	target_link_libraries(mumble
		PRIVATE
			dbghelp.lib
			dinput8.lib
			dxguid.lib
			wintrust.lib
	)
else()
	target_sources(mumble PRIVATE "SharedMemory_unix.cpp")

	if(NOT APPLE)
		find_pkg(X11 COMPONENTS Xext REQUIRED)

		if(xinput2)
			find_pkg(X11 COMPONENTS Xi REQUIRED)
			target_link_libraries(mumble PRIVATE X11::Xi)
		else()
			target_compile_definitions(mumble PRIVATE "NO_XINPUT2")
		endif()

		if(static AND TARGET Qt5::QXcbIntegrationPlugin)
			include_qt_plugin(mumble PRIVATE QXcbIntegrationPlugin)
			target_link_libraries(mumble PRIVATE Qt5::QXcbIntegrationPlugin)
		endif()

		target_sources(mumble
			PRIVATE
				"GlobalShortcut_unix.cpp"
				"GlobalShortcut_unix.h"
				"Log_unix.cpp"
				"os_unix.cpp"
		)

		if(${CMAKE_SYSTEM_NAME} STREQUAL "Linux")
			find_library(LIB_RT rt)
			target_link_libraries(mumble PRIVATE ${LIB_RT})
		endif()

		target_link_libraries(mumble PRIVATE X11::Xext)
	else()
		find_library(LIB_APPKIT "AppKit")
		find_library(LIB_APPLICATIONSERVICES "ApplicationServices")
		find_library(LIB_CARBON "Carbon")
		find_library(LIB_SCRIPTINGBRIDGE "ScriptingBridge")
		find_library(LIB_SECURITY "Security")
		find_library(LIB_XAR "xar")

		target_sources(mumble
			PRIVATE
				"AppNap.h"
				"AppNap.mm"
				"GlobalShortcut_macx.h"
				"GlobalShortcut_macx.mm"
				"Log_macx.mm"
				"os_macx.mm"
		)

		if(static AND TARGET Qt5::QCocoaIntegrationPlugin)
			include_qt_plugin(mumble PRIVATE QCocoaIntegrationPlugin)
			target_link_libraries(mumble PRIVATE Qt5::QCocoaIntegrationPlugin)
		endif()

		target_link_libraries(mumble
			PRIVATE
				${LIB_APPKIT}
				${LIB_APPLICATIONSERVICES}
				${LIB_CARBON}
				${LIB_SCRIPTINGBRIDGE}
				${LIB_SECURITY}
				${LIB_XAR}
		)
	endif()
endif()

if(bundled-opus)
	option(OPUS_BUILD_SHARED_LIBRARY "" ON)
	if(MINGW)
		option(OPUS_STACK_PROTECTOR "" OFF)
	endif()

	add_subdirectory("${3RDPARTY_DIR}/opus" "${CMAKE_CURRENT_BINARY_DIR}/opus")

	# Disable all warnings that the Opus code may emit
	disable_warnings_for_all_targets_in("${3RDPARTY_DIR}/opus")

	add_dependencies(mumble opus)

	target_include_directories(mumble PRIVATE "${3RDPARTY_DIR}/opus/include")

	if(tests)
		set_target_properties(test_opus_decode test_opus_padding PROPERTIES RUNTIME_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/tests")
	endif()

	if(WIN32)
		# Shared library on Windows (e.g. ".dll")
		set_target_properties(opus PROPERTIES RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR})
	else()
		# Shared library on UNIX (e.g. ".so")
		set_target_properties(opus PROPERTIES LIBRARY_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR})
	endif()

	install_library(opus mumble_client)
else()
	find_pkg(opus REQUIRED)
	target_include_directories(mumble PRIVATE ${opus_INCLUDE_DIRS})
endif()

if(bundled-celt)
	add_subdirectory("${3RDPARTY_DIR}/celt-0.7.0-build" "${CMAKE_CURRENT_BINARY_DIR}/celt")

	# Disable all warnings that the Celt code may emit
	disable_warnings_for_all_targets_in("${3RDPARTY_DIR}/celt-0.7.0-build")

	# celt_types.h has some logic of checking whether or not it may include
	# stdint.h or not. In order to avoid this logic to mess up, we provide
	# it with the hint that it may indeed include stdint.h and be done with it
	target_compile_definitions(celt
		PRIVATE
			HAVE_STDINT_H
	)
	# We also set this flag for Mumble as it includes the problematic
	# header file indirectly at some points
	target_compile_definitions(mumble
		PRIVATE
			HAVE_STDINT_H
	)

	add_dependencies(mumble celt)

	target_include_directories(mumble PRIVATE "${3RDPARTY_DIR}/celt-0.7.0-src/libcelt")

	if(WIN32)
		# Shared library on Windows (e.g. ".dll")
		set_target_properties(celt PROPERTIES RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR})
	else()
		# Shared library on UNIX (e.g. ".so")
		set_target_properties(celt PROPERTIES LIBRARY_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR})
	endif()

	install_library(celt mumble_client)
else()
	find_pkg(celt REQUIRED)
	target_include_directories(mumble PRIVATE ${celt_INCLUDE_DIRS})
endif()

if(bundled-speex)
	add_subdirectory("${3RDPARTY_DIR}/speex-build" "${CMAKE_CURRENT_BINARY_DIR}/speex")

	# Disable all warnings that the speex code may emit
	disable_warnings_for_all_targets_in("${3RDPARTY_DIR}/speex-build")

	target_link_libraries(mumble PRIVATE speex)

	if(WIN32)
		# Shared library on Windows (e.g. ".dll")
		set_target_properties(speex PROPERTIES RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR})
	else()
		# Shared library on UNIX (e.g. ".so")
		set_target_properties(speex PROPERTIES LIBRARY_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR})
	endif()

	install_library(speex mumble_client)
else()
	find_pkg(speex REQUIRED)
	find_pkg(speexdsp REQUIRED)

	target_link_libraries(mumble
		PRIVATE
			${speex_LIBRARIES}
			${speexdsp_LIBRARIES}
	)
endif()

if(rnnoise)
	add_subdirectory("${3RDPARTY_DIR}/rnnoise-build" "${CMAKE_CURRENT_BINARY_DIR}/rnnoise")

	# Disable all warnings that the RNNoise code may emit
	disable_warnings_for_all_targets_in("${3RDPARTY_DIR}/rnnoise-build")

	target_compile_definitions(mumble PRIVATE "USE_RNNOISE")
	target_link_libraries(mumble PRIVATE rnnoise)

	if(WIN32)
		# Shared library on Windows (e.g. ".dll")
		set_target_properties(rnnoise PROPERTIES RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR})
	else()
		# Shared library on UNIX (e.g. ".so")
		set_target_properties(rnnoise PROPERTIES LIBRARY_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR})
	endif()

	install_library(rnnoise mumble_client)
endif()

if(qtspeech)
	find_pkg(Qt5 COMPONENTS TextToSpeech REQUIRED)
	target_sources(mumble PRIVATE "TextToSpeech.cpp")
	target_link_libraries(mumble PRIVATE Qt5::TextToSpeech)
elseif(WIN32)
	target_sources(mumble PRIVATE "TextToSpeech_win.cpp")
	if(MINGW)
		target_link_libraries(mumble PRIVATE sapi.lib)
	endif()
elseif(APPLE)
	target_sources(mumble PRIVATE "TextToSpeech_macx.mm")
else()
	target_sources(mumble PRIVATE "TextToSpeech_unix.cpp")

	if(speechd)
		find_pkg("speech-dispatcher" REQUIRED)

		target_compile_definitions(mumble
			PRIVATE
				"USE_SPEECHD"
				"USE_SPEECHD_PKGCONFIG"
		)
		target_link_libraries(mumble PRIVATE ${speech-dispatcher_LIBRARIES})
	else()
		target_compile_definitions(mumble PRIVATE "USE_NO_TTS")
	endif()
endif()

if(crash-report)
	target_sources(mumble
		PRIVATE
			"CrashReporter.cpp"
			"CrashReporter.h"
	)
else()
	target_compile_definitions(mumble PRIVATE "NO_CRASH_REPORT")
endif()

if(manual-plugin)
	target_sources(mumble
		PRIVATE
			"ManualPlugin.cpp"
			"ManualPlugin.h"
			"ManualPlugin.ui"
	)

	target_compile_definitions(mumble PRIVATE "USE_MANUAL_PLUGIN")
endif()

if(NOT update)
	target_compile_definitions(mumble PRIVATE "NO_UPDATE_CHECK")
endif()

if(dbus AND NOT WIN32 AND NOT APPLE)
	find_pkg(Qt5 COMPONENTS DBus REQUIRED)

	target_sources(mumble
		PRIVATE
			"DBus.cpp"
			"DBus.h"
	)

	target_compile_definitions(mumble PRIVATE "USE_DBUS")
	target_link_libraries(mumble PRIVATE Qt5::DBus)
endif()

if(translations)
	set(ts_files
		"mumble_ar.ts"
		"mumble_be.ts"
		"mumble_bg.ts"
		"mumble_br.ts"
		"mumble_ca_ES.ts"
		"mumble_ca.ts"
		"mumble_cs.ts"
		"mumble_cy.ts"
		"mumble_da.ts"
		"mumble_de.ts"
		"mumble_el_GR.ts"
		"mumble_el.ts"
		"mumble_en_GB.ts"
		"mumble_en.ts"
		"mumble_eo.ts"
		"mumble_es.ts"
		"mumble_eu.ts"
		"mumble_fa_IR.ts"
		"mumble_fi.ts"
		"mumble_fr.ts"
		"mumble_gl.ts"
		"mumble_he.ts"
		"mumble_hi.ts"
		"mumble_hu.ts"
		"mumble_it.ts"
		"mumble_ja.ts"
		"mumble_ko.ts"
		"mumble_lt.ts"
		"mumble_nb_NO.ts"
		"mumble_nl_BE.ts"
		"mumble_nl.ts"
		"mumble_no.ts"
		"mumble_pl.ts"
		"mumble_pt_BR.ts"
		"mumble_pt_PT.ts"
		"mumble_ro.ts"
		"mumble_ru.ts"
		"mumble_sk.ts"
		"mumble_sv.ts"
		"mumble_te.ts"
		"mumble_th.ts"
		"mumble_tr.ts"
		"mumble_uk.ts"
		"mumble_vi.ts"
		"mumble_zh_CN.ts"
		"mumble_zh_HK.ts"
		"mumble_zh_TW.ts"
	)

	create_translations_qrc(${CMAKE_CURRENT_SOURCE_DIR} "${ts_files}" "translations.qrc")
	target_sources(mumble PRIVATE "translations.qrc")
endif()

if(classic-theme)
	target_sources(mumble PRIVATE "${CMAKE_SOURCE_DIR}/themes/ClassicTheme.qrc")
endif()

if(overlay)
	target_sources(mumble
		PRIVATE
			"Overlay.cpp"
			"Overlay.h"
			"Overlay.ui"
			"OverlayClient.cpp"
			"OverlayClient.h"
			"OverlayConfig.cpp"
			"OverlayConfig.h"
			"OverlayEditor.cpp"
			"OverlayEditor.h"
			"OverlayEditor.ui"
			"OverlayEditorScene.cpp"
			"OverlayEditorScene.h"
			"OverlayPositionableItem.cpp"
			"OverlayPositionableItem.h"
			"OverlayText.cpp"
			"OverlayText.h"
			"OverlayUser.cpp"
			"OverlayUser.h"
			"OverlayUserGroup.cpp"
			"OverlayUserGroup.h"
			"PathListWidget.cpp"
			"PathListWidget.h"
	)

	if(WIN32)
		target_sources(mumble
			PRIVATE
				"Overlay_win.cpp"
				"Overlay_win.h"
		)
	else()
		if(APPLE)
			target_sources(mumble PRIVATE "Overlay_macx.mm")
		else()
			target_sources(mumble PRIVATE "Overlay_unix.cpp")
		endif()
	endif()

	target_compile_definitions(mumble PRIVATE "USE_OVERLAY")
endif()

if(xboxinput)
	target_sources(mumble
		PRIVATE
			"XboxInput.cpp"
			"XboxInput.h"
	)

	target_compile_definitions(mumble PRIVATE "USE_XBOXINPUT")
endif()

if(gkey)
	target_sources(mumble
		PRIVATE
			"GKey.cpp"
			"GKey.h"
	)

	target_compile_definitions(mumble PRIVATE "USE_GKEY")
endif()

if(g15)
	if(WIN32 OR APPLE)
		target_sources(mumble
			PRIVATE
				"G15LCDEngine_helper.cpp"
				"G15LCDEngine_helper.h"
	)
	else()
		find_library(LIB_G15DAEMON_CLIENT "g15daemon_client")
		if(LIB_G15DAEMON_CLIENT-NOTFOUND)
			message(FATAL_ERROR "G15 library not found!")
		endif()

		target_sources(mumble
			PRIVATE
				"G15LCDEngine_unix.cpp"
				"G15LCDEngine_unix.h"
		)

		target_compile_definitions(mumble PRIVATE "USE_G15")
		target_link_libraries(mumble PRIVATE ${LIB_G15DAEMON_CLIENT})
	endif()
endif()

if(zeroconf)
	if(NOT APPLE)
		find_pkg(avahi-compat-libdns_sd QUIET)
		if(avahi-compat-libdns_sd_FOUND)
			target_include_directories(mumble PRIVATE ${avahi-compat-libdns_sd_INCLUDE_DIRS})
			target_link_libraries(mumble PRIVATE ${avahi-compat-libdns_sd_LIBRARIES})
		else()
			find_library(LIB_DNSSD "dnssd")
			if(${LIB_DNSSD} STREQUAL "LIB_DNSSD-NOTFOUND")
				message(FATAL_ERROR "DNS-SD library not found!")
			endif()
			target_link_libraries(mumble PRIVATE ${LIB_DNSSD})
		endif()
	endif()

	target_sources(mumble
		PRIVATE
			"Zeroconf.cpp"
			"Zeroconf.h"
			# Unlike what the name implies, this 3rdparty helper is not actually related to Bonjour.
			# It just uses the API provided by mDNSResponder, making it compatible with Avahi too.
			"${3RDPARTY_DIR}/qqbonjour/BonjourRecord.h"
			"${3RDPARTY_DIR}/qqbonjour/BonjourServiceBrowser.cpp"
			"${3RDPARTY_DIR}/qqbonjour/BonjourServiceBrowser.h"
			"${3RDPARTY_DIR}/qqbonjour/BonjourServiceResolver.cpp"
			"${3RDPARTY_DIR}/qqbonjour/BonjourServiceResolver.h"
	)

	target_compile_definitions(mumble PRIVATE "USE_ZEROCONF")
	target_include_directories(mumble PRIVATE "${3RDPARTY_DIR}/qqbonjour")
endif()

if(alsa)
	find_pkg(ALSA REQUIRED)
	target_sources(mumble
		PRIVATE
			"ALSAAudio.cpp"
			"ALSAAudio.h"
	)

	target_compile_definitions(mumble PRIVATE "USE_ALSA")
	target_link_libraries(mumble PRIVATE ALSA::ALSA)
endif()

if(asio)
	if(NOT ASIO_DIR)
		set(ASIO_DIR "${3RDPARTY_DIR}/asio")
	endif()

	target_sources(mumble
		PRIVATE
			"ASIOInput.cpp"
			"ASIOInput.h"
			"ASIOInput.ui"
	)

	target_compile_definitions(mumble PRIVATE "USE_ASIO")
	target_include_directories(mumble
		PRIVATE SYSTEM
			"${ASIO_DIR}/common"
			"${ASIO_DIR}/host"
			"${ASIO_DIR}/host/pc"
	)
endif()

if(coreaudio)
	find_library(LIB_AUDIOUNIT "AudioUnit")
	find_library(LIB_COREAUDIO "CoreAudio")

	target_sources(mumble
		PRIVATE
			"CoreAudio.cpp"
			"CoreAudio.h"
	)

	target_link_libraries(mumble
		PRIVATE
			${LIB_AUDIOUNIT}
			${LIB_COREAUDIO}
	)
endif()

if(jackaudio)
	target_sources(mumble
		PRIVATE
			"JackAudio.cpp"
			"JackAudio.h"
	)

	target_compile_definitions(mumble PRIVATE "USE_JACKAUDIO")
	target_include_directories(mumble PRIVATE SYSTEM "${3RDPARTY_DIR}/jack")
endif()

if(oss)
	target_sources(mumble
		PRIVATE
			"OSS.cpp"
			"OSS.h"
	)

	target_compile_definitions(mumble PRIVATE "USE_OSS")
	target_include_directories(mumble PRIVATE SYSTEM "/usr/lib/oss/include")
endif()

if(portaudio)
	target_sources(mumble
		PRIVATE
			"PAAudio.cpp"
			"PAAudio.h"
	)

	target_compile_definitions(mumble PRIVATE "USE_PORTAUDIO")
	target_include_directories(mumble PRIVATE SYSTEM "${3RDPARTY_DIR}/portaudio")
endif()

if(pulseaudio)
	target_sources(mumble
		PRIVATE
			"PulseAudio.cpp"
			"PulseAudio.h"
	)

	target_compile_definitions(mumble PRIVATE "USE_PULSEAUDIO")
	target_include_directories(mumble PRIVATE SYSTEM "${3RDPARTY_DIR}/pulseaudio")
endif()

if(wasapi)
	target_sources(mumble
		PRIVATE
			"WASAPI.cpp"
			"WASAPI.h"
			"WASAPINotificationClient.cpp"
			"WASAPINotificationClient.h"
	)

	target_compile_definitions(mumble PRIVATE "USE_WASAPI")
	target_link_libraries(mumble PRIVATE avrt.lib)
	if(MINGW)
		target_link_libraries(mumble PRIVATE ksuser.lib)
	endif()

	if(MSVC)
		set_property(TARGET mumble APPEND_STRING PROPERTY LINK_FLAGS " /DELAYLOAD:avrt.dll")
	endif()
endif()
