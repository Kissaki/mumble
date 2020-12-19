<?xml version="1.0" encoding="UTF-8"?>
<ui version="4.0">
 <class>MainWindow</class>
 <widget class="QMainWindow" name="MainWindow">
  <property name="geometry">
   <rect>
    <x>0</x>
    <y>0</y>
    <width>671</width>
    <height>435</height>
   </rect>
  </property>
  <property name="windowTitle">
   <string>Mumble</string>
  </property>
  <property name="dockOptions">
   <set>QMainWindow::AllowNestedDocks|QMainWindow::AnimatedDocks</set>
  </property>
  <property name="unifiedTitleAndToolBarOnMac">
   <bool>true</bool>
  </property>
  <widget class="UserView" name="qtvUsers">
   <property name="contextMenuPolicy">
    <enum>Qt::CustomContextMenu</enum>
   </property>
   <property name="acceptDrops">
    <bool>true</bool>
   </property>
   <property name="dragEnabled">
    <bool>true</bool>
   </property>
   <property name="rootIsDecorated">
    <bool>false</bool>
   </property>
   <property name="uniformRowHeights">
    <bool>true</bool>
   </property>
   <property name="headerHidden">
    <bool>true</bool>
   </property>
   <attribute name="headerVisible">
    <bool>false</bool>
   </attribute>
  </widget>
  <widget class="QMenuBar" name="menubar">
   <property name="geometry">
    <rect>
     <x>0</x>
     <y>0</y>
     <width>671</width>
     <height>30</height>
    </rect>
   </property>
   <widget class="QMenu" name="qmConfig">
    <property name="title">
     <string>C&amp;onfigure</string>
    </property>
    <addaction name="qaConfigDialog"/>
   </widget>
   <widget class="QMenu" name="qmHelp">
    <property name="title">
     <string>&amp;Help</string>
    </property>
    <addaction name="qaHelpWhatsThis"/>
    <addaction name="separator"/>
    <addaction name="qaHelpAbout"/>
    <addaction name="qaHelpAboutQt"/>
    <addaction name="separator"/>
    <addaction name="qaHelpVersionCheck"/>
   </widget>
   <widget class="QMenu" name="qmServer">
    <property name="title">
     <string>S&amp;erver</string>
    </property>
   </widget>
   <widget class="QMenu" name="qmSelf">
    <property name="title">
     <string>&amp;Self</string>
    </property>
    <addaction name="qaAudioMute"/>
    <addaction name="qaAudioDeaf"/>
    <addaction name="qaSelfPrioritySpeaker"/>
    <addaction name="separator"/>
    <addaction name="qaRecording"/>
    <addaction name="separator"/>
    <addaction name="qaSelfComment"/>
    <addaction name="qaServerTexture"/>
    <addaction name="qaServerTextureRemove"/>
    <addaction name="separator"/>
    <addaction name="qaSelfRegister"/>
    <addaction name="qaAudioStats"/>
   </widget>
   <addaction name="qmServer"/>
   <addaction name="qmSelf"/>
   <addaction name="qmConfig"/>
   <addaction name="qmHelp"/>
  </widget>
  <widget class="QDockWidget" name="qdwLog">
   <property name="minimumSize">
    <size>
     <width>250</width>
     <height>121</height>
    </size>
   </property>
   <property name="features">
    <set>QDockWidget::DockWidgetClosable|QDockWidget::DockWidgetMovable</set>
   </property>
   <property name="windowTitle">
    <string>Log</string>
   </property>
   <attribute name="dockWidgetArea">
    <number>1</number>
   </attribute>
   <widget class="LogTextBrowser" name="qteLog">
    <property name="contextMenuPolicy">
     <enum>Qt::CustomContextMenu</enum>
    </property>
    <property name="whatsThis">
     <string>This shows all recent activity. Connecting to servers, errors and information messages all show up here.&lt;br /&gt;To configure exactly which messages show up here, use the &lt;b&gt;Settings&lt;/b&gt; command from the menu.</string>
    </property>
    <property name="openLinks">
     <bool>false</bool>
    </property>
   </widget>
  </widget>
  <widget class="QDockWidget" name="qdwChat">
   <property name="sizePolicy">
    <sizepolicy hsizetype="Preferred" vsizetype="Preferred">
     <horstretch>0</horstretch>
     <verstretch>0</verstretch>
    </sizepolicy>
   </property>
   <property name="toolTip">
    <string/>
   </property>
   <property name="whatsThis">
    <string>This is the chatbar&lt;br /&gt;If you enter text here and then press enter the text is sent to the user or channel that was selected. If nothing is selected the message is sent to your current channel.</string>
   </property>
   <property name="features">
    <set>QDockWidget::DockWidgetClosable|QDockWidget::DockWidgetMovable</set>
   </property>
   <property name="windowTitle">
    <string>Chatbar</string>
   </property>
   <attribute name="dockWidgetArea">
    <number>1</number>
   </attribute>
   <widget class="ChatbarTextEdit" name="qteChat">
    <property name="sizePolicy">
     <sizepolicy hsizetype="Expanding" vsizetype="MinimumExpanding">
      <horstretch>0</horstretch>
      <verstretch>0</verstretch>
     </sizepolicy>
    </property>
    <property name="maximumSize">
     <size>
      <width>16777215</width>
      <height>16777215</height>
     </size>
    </property>
    <property name="acceptRichText">
     <bool>false</bool>
    </property>
   </widget>
  </widget>
  <widget class="QToolBar" name="qtIconToolbar">
   <property name="windowTitle">
    <string>Icon Toolbar</string>
   </property>
   <attribute name="toolBarArea">
    <enum>TopToolBarArea</enum>
   </attribute>
   <attribute name="toolBarBreak">
    <bool>false</bool>
   </attribute>
   <addaction name="qaServerConnect"/>
   <addaction name="qaServerInformation"/>
   <addaction name="separator"/>
   <addaction name="qaAudioMute"/>
   <addaction name="qaAudioDeaf"/>
   <addaction name="qaRecording"/>
   <addaction name="separator"/>
   <addaction name="qaSelfComment"/>
   <addaction name="separator"/>
   <addaction name="qaConfigDialog"/>
   <addaction name="separator"/>
   <addaction name="qaFilterToggle"/>
  </widget>
  <action name="qaQuit">
   <property name="text">
    <string>&amp;Quit Mumble</string>
   </property>
   <property name="toolTip">
    <string>Closes the program</string>
   </property>
   <property name="whatsThis">
    <string>Exits the application.</string>
   </property>
   <property name="shortcut">
    <string>Ctrl+Q</string>
   </property>
  </action>
  <action name="qaHide">
   <property name="text">
    <string>&amp;Hide Mumble</string>
   </property>
   <property name="toolTip">
    <string>Hides the main Mumble window.</string>
   </property>
   <property name="whatsThis">
    <string>Hides the main Mumble window. Restore by clicking on the tray icon or starting Mumble again.</string>
   </property>
  </action>
  <action name="qaServerConnect">
   <property name="icon">
    <iconset>
     <normaloff>skin:categories/applications-internet.svg</normaloff>skin:categories/applications-internet.svg</iconset>
   </property>
   <property name="text">
    <string>&amp;Connect...</string>
   </property>
   <property name="toolTip">
    <string>Open the server connection dialog</string>
   </property>
   <property name="whatsThis">
    <string>Shows a dialog of registered servers, and also allows quick-connect.</string>
   </property>
   <property name="iconVisibleInMenu">
    <bool>false</bool>
   </property>
  </action>
  <action name="qaServerDisconnect">
   <property name="enabled">
    <bool>false</bool>
   </property>
   <property name="text">
    <string>&amp;Disconnect</string>
   </property>
   <property name="toolTip">
    <string>Disconnect from server</string>
   </property>
   <property name="whatsThis">
    <string>Disconnects you from the server.</string>
   </property>
  </action>
  <action name="qaServerBanList">
   <property name="enabled">
    <bool>false</bool>
   </property>
   <property name="text">
    <string>&amp;Ban list...</string>
   </property>
   <property name="toolTip">
    <string>Edit ban list on server</string>
   </property>
   <property name="whatsThis">
    <string>This lets you edit the server-side IP ban list.</string>
   </property>
  </action>
  <action name="qaServerInformation">
   <property name="enabled">
    <bool>false</bool>
   </property>
   <property name="icon">
    <iconset>
     <normaloff>skin:Information_icon.svg</normaloff>skin:Information_icon.svg</iconset>
   </property>
   <property name="text">
    <string>&amp;Information...</string>
   </property>
   <property name="toolTip">
    <string>Show information about the server connection</string>
   </property>
   <property name="whatsThis">
    <string>This will show extended information about the connection to the server.</string>
   </property>
   <property name="iconVisibleInMenu">
    <bool>false</bool>
   </property>
  </action>
  <action name="qaUserKick">
   <property name="text">
    <string>&amp;Kick...</string>
   </property>
   <property name="toolTip">
    <string>Kick user (with reason)</string>
   </property>
   <property name="whatsThis">
    <string>Kick selected user off server. You'll be asked to specify a reason.</string>
   </property>
  </action>
  <action name="qaUserMute">
   <property name="checkable">
    <bool>true</bool>
   </property>
   <property name="text">
    <string>&amp;Mute</string>
   </property>
   <property name="toolTip">
    <string>Mute user</string>
   </property>
   <property name="whatsThis">
    <string>Mute or unmute user on server. Unmuting a deafened user will also undeafen them.</string>
   </property>
  </action>
  <action name="qaUserBan">
   <property name="text">
    <string>&amp;Ban...</string>
   </property>
   <property name="toolTip">
    <string>Kick and ban user (with reason)</string>
   </property>
   <property name="whatsThis">
    <string>Kick and ban selected user from server. You'll be asked to specify a reason.</string>
   </property>
  </action>
  <action name="qaUserDeaf">
   <property name="checkable">
    <bool>true</bool>
   </property>
   <property name="text">
    <string>&amp;Deafen</string>
   </property>
   <property name="toolTip">
    <string>Deafen user</string>
   </property>
   <property name="whatsThis">
    <string>Deafen or undeafen user on server. Deafening a user will also mute them.</string>
   </property>
  </action>
  <action name="qaUserLocalIgnore">
   <property name="checkable">
    <bool>true</bool>
   </property>
   <property name="text">
    <string>Ignore Messages</string>
   </property>
   <property name="toolTip">
    <string>Locally ignore user's text chat messages.</string>
   </property>
   <property name="whatsThis">
    <string>Silently drops all text messages from the user.</string>
   </property>
  </action>
  <action name="qaUserLocalVolume">
   <property name="text">
    <string>Local Volume Adjustment...</string>
   </property>
   <property name="toolTip">
    <string>Locally adjust the user's speech volume.</string>
   </property>
   <property name="whatsThis">
    <string>Opens a dialog with a volume slider. Use this on other users in the same room.</string>
   </property>
  </action>
  <action name="qaUserLocalMute">
   <property name="checkable">
    <bool>true</bool>
   </property>
   <property name="text">
    <string>&amp;Local Mute</string>
   </property>
   <property name="toolTip">
    <string>Mute user locally</string>
   </property>
   <property name="whatsThis">
    <string>Mute or unmute user locally. Use this on other users in the same room.</string>
   </property>
  </action>
  <action name="qaUserTextMessage">
   <property name="text">
    <string>Send &amp;Message...</string>
   </property>
   <property name="toolTip">
    <string>Send a Text Message</string>
   </property>
   <property name="whatsThis">
    <string>Sends a text message to another user.</string>
   </property>
  </action>
  <action name="qaChannelAdd">
   <property name="text">
    <string>&amp;Add...</string>
   </property>
   <property name="toolTip">
    <string>Add new channel</string>
   </property>
   <property name="whatsThis">
    <string>This adds a new sub-channel to the currently selected channel.</string>
   </property>
  </action>
  <action name="qaChannelRemove">
   <property name="text">
    <string>&amp;Remove...</string>
   </property>
   <property name="toolTip">
    <string>Remove channel</string>
   </property>
   <property name="whatsThis">
    <string>This removes a channel and all sub-channels.</string>
   </property>
  </action>
  <action name="qaChannelACL">
   <property name="text">
    <string>&amp;Edit...</string>
   </property>
   <property name="toolTip">
    <string>Edit Groups and ACL for channel</string>
   </property>
   <property name="whatsThis">
    <string>This opens the Group and ACL dialog for the channel, to control permissions.</string>
   </property>
  </action>
  <action name="qaChannelLink">
   <property name="text">
    <string>&amp;Link</string>
   </property>
   <property name="toolTip">
    <string>Link your channel to another channel</string>
   </property>
   <property name="whatsThis">
    <string>This links your current channel to the selected channel. If users in a channel have permission to speak in the other channel, users can now hear each other. This is a permanent link, and will last until manually unlinked or the server is restarted. Please see the shortcuts for push-to-link.</string>
   </property>
  </action>
  <action name="qaChannelUnlink">
   <property name="text">
    <string comment="Channel">&amp;Unlink</string>
   </property>
   <property name="toolTip">
    <string>Unlink your channel from another channel</string>
   </property>
   <property name="whatsThis">
    <string>This unlinks your current channel from the selected channel.</string>
   </property>
  </action>
  <action name="qaChannelUnlinkAll">
   <property name="text">
    <string>&amp;Unlink All</string>
   </property>
   <property name="toolTip">
    <string>Unlinks your channel from all linked channels.</string>
   </property>
   <property name="whatsThis">
    <string>This unlinks your current channel (not the selected one) from all linked channels.</string>
   </property>
  </action>
  <action name="qaAudioReset">
   <property name="text">
    <string>&amp;Reset</string>
   </property>
   <property name="toolTip">
    <string>Reset audio preprocessor</string>
   </property>
   <property name="whatsThis">
    <string>This will reset the audio preprocessor, including noise cancellation, automatic gain and voice activity detection. If something suddenly worsens the audio environment (like dropping the microphone) and it was temporary, use this to avoid having to wait for the preprocessor to readjust.</string>
   </property>
  </action>
  <action name="qaAudioMute">
   <property name="checkable">
    <bool>true</bool>
   </property>
   <property name="icon">
    <iconset>
     <normaloff>skin:actions/audio-input-microphone.svg</normaloff>
     <normalon>skin:actions/audio-input-microphone-muted.svg</normalon>
     <activeon>skin:actions/audio-input-microphone-muted.svg</activeon>skin:actions/audio-input-microphone.svg</iconset>
   </property>
   <property name="text">
    <string>&amp;Mute Self</string>
   </property>
   <property name="toolTip">
    <string>Mute yourself</string>
   </property>
   <property name="whatsThis">
    <string>Mute or unmute yourself. When muted, you will not send any data to the server. Unmuting while deafened will also undeafen.</string>
   </property>
   <property name="iconVisibleInMenu">
    <bool>false</bool>
   </property>
  </action>
  <action name="qaAudioDeaf">
   <property name="checkable">
    <bool>true</bool>
   </property>
   <property name="icon">
    <iconset>
     <normaloff>skin:self_undeafened.svg</normaloff>
     <normalon>skin:deafened_self.svg</normalon>
     <activeon>skin:deafened_self.svg</activeon>skin:self_undeafened.svg</iconset>
   </property>
   <property name="text">
    <string>&amp;Deafen Self</string>
   </property>
   <property name="toolTip">
    <string>Deafen yourself</string>
   </property>
   <property name="whatsThis">
    <string>Deafen or undeafen yourself. When deafened, you will not hear anything. Deafening yourself will also mute.</string>
   </property>
   <property name="iconVisibleInMenu">
    <bool>false</bool>
   </property>
  </action>
  <action name="qaAudioTTS">
   <property name="checkable">
    <bool>true</bool>
   </property>
   <property name="text">
    <string>&amp;Text-To-Speech</string>
   </property>
   <property name="toolTip">
    <string>Toggle Text-To-Speech</string>
   </property>
   <property name="whatsThis">
    <string>Enable or disable the text-to-speech engine. Only messages enabled for TTS in the Configuration dialog will actually be spoken.</string>
   </property>
  </action>
  <action name="qaAudioStats">
   <property name="text">
    <string>Audio S&amp;tatistics...</string>
   </property>
   <property name="toolTip">
    <string>Display audio statistics</string>
   </property>
   <property name="whatsThis">
    <string>Pops up a small dialog with information about your current audio input.</string>
   </property>
  </action>
  <action name="qaAudioUnlink">
   <property name="text">
    <string>&amp;Unlink Plugins</string>
   </property>
   <property name="toolTip">
    <string>Forcibly unlink plugin</string>
   </property>
   <property name="whatsThis">
    <string>This forces the current plugin to unlink, which is handy if it is reading completely wrong data.</string>
   </property>
  </action>
  <action name="qaConfigDialog">
   <property name="icon">
    <iconset>
     <normaloff>skin:config_basic.png</normaloff>skin:config_basic.png</iconset>
   </property>
   <property name="text">
    <string>&amp;Settings...</string>
   </property>
   <property name="toolTip">
    <string>Configure Mumble</string>
   </property>
   <property name="whatsThis">
    <string>Allows you to change most settings for Mumble.</string>
   </property>
   <property name="menuRole">
    <enum>QAction::PreferencesRole</enum>
   </property>
   <property name="iconVisibleInMenu">
    <bool>false</bool>
   </property>
  </action>
  <action name="qaFilterToggle">
   <property name="checkable">
    <bool>true</bool>
   </property>
   <property name="icon">
    <iconset>
     <normaloff>skin:filter_off.svg</normaloff>
     <normalon>skin:filter_on.svg</normalon>
     <activeon>skin:filter_on.svg</activeon>skin:filter_off.svg</iconset>
   </property>
   <property name="text">
    <string>&amp;Filter on/off</string>
   </property>
   <property name="toolTip">
    <string>Toggle the channel filter (Ctrl+F)</string>
   </property>
   <property name="whatsThis">
    <string>Enable or disable the filtering of select channels.
By default all empty channels will be filtered.
You can mark additional channels for filtering from
the channel's context menu.</string>
   </property>
   <property name="shortcut">
    <string>Ctrl+F</string>
   </property>
   <property name="iconVisibleInMenu">
    <bool>false</bool>
   </property>
  </action>
  <action name="qaAudioWizard">
   <property name="text">
    <string>&amp;Audio Wizard...</string>
   </property>
   <property name="toolTip">
    <string>Start the audio configuration wizard</string>
   </property>
   <property name="whatsThis">
    <string>This will guide you through the process of configuring your audio hardware.</string>
   </property>
  </action>
  <action name="qaDeveloperConsole">
   <property name="text">
    <string>Developer &amp;Console...</string>
   </property>
   <property name="toolTip">
    <string>Show the Developer Console</string>
   </property>
   <property name="whatsThis">
    <string>Shows the Mumble Developer Console, where Mumble's log output can be inspected.</string>
   </property>
  </action>
  <action name="qaHelpWhatsThis">
   <property name="text">
    <string>&amp;What's This?</string>
   </property>
   <property name="toolTip">
    <string>Enter What's This? mode</string>
   </property>
   <property name="whatsThis">
    <string>Click this to enter &quot;What's This?&quot; mode. Your cursor will turn into a question mark. Click on any button, menu choice or area to show a description of what it is.</string>
   </property>
  </action>
  <action name="qaHelpAbout">
   <property name="text">
    <string>&amp;About...</string>
   </property>
   <property name="toolTip">
    <string>Information about Mumble</string>
   </property>
   <property name="whatsThis">
    <string>Shows a small dialog with information and license for Mumble.</string>
   </property>
   <property name="menuRole">
    <enum>QAction::AboutRole</enum>
   </property>
  </action>
  <action name="qaHelpAboutSpeex">
   <property name="text">
    <string>About &amp;Speex...</string>
   </property>
   <property name="toolTip">
    <string>Information about Speex</string>
   </property>
   <property name="whatsThis">
    <string>Shows a small dialog with information about Speex.</string>
   </property>
   <property name="menuRole">
    <enum>QAction::ApplicationSpecificRole</enum>
   </property>
  </action>
  <action name="qaHelpAboutQt">
   <property name="text">
    <string>About &amp;Qt...</string>
   </property>
   <property name="toolTip">
    <string>Information about Qt</string>
   </property>
   <property name="whatsThis">
    <string>Shows a small dialog with information about Qt.</string>
   </property>
   <property name="menuRole">
    <enum>QAction::AboutQtRole</enum>
   </property>
  </action>
  <action name="qaHelpVersionCheck">
   <property name="text">
    <string>Check for &amp;Updates</string>
   </property>
   <property name="toolTip">
    <string>Check for new version of Mumble</string>
   </property>
   <property name="whatsThis">
    <string>Connects to the Mumble webpage to check if a new version is available, and notifies you with an appropriate download URL if this is the case.</string>
   </property>
  </action>
  <action name="qaChannelSendMessage">
   <property name="text">
    <string>Send &amp;Message...</string>
   </property>
   <property name="toolTip">
    <string>Send a Text Message</string>
   </property>
   <property name="whatsThis">
    <string>Sends a text message to all users in a channel.</string>
   </property>
  </action>
  <action name="qaChannelCopyURL">
   <property name="text">
    <string>&amp;Copy URL</string>
   </property>
   <property name="toolTip">
    <string>Copies a link to this channel to the clipboard.</string>
   </property>
   <property name="whatsThis">
    <string>Copies a link to this channel to the clipboard.</string>
   </property>
  </action>
  <action name="qaConfigMinimal">
   <property name="checkable">
    <bool>true</bool>
   </property>
   <property name="text">
    <string>&amp;Minimal View</string>
   </property>
   <property name="toolTip">
    <string>Toggle minimal window modes</string>
   </property>
   <property name="whatsThis">
    <string>This will toggle minimal mode, where the log window and menu is hidden.</string>
   </property>
  </action>
  <action name="qaConfigHideFrame">
   <property name="checkable">
    <bool>true</bool>
   </property>
   <property name="text">
    <string>Hide Frame</string>
   </property>
   <property name="toolTip">
    <string>Toggle showing frame on minimal window</string>
   </property>
   <property name="whatsThis">
    <string>This will toggle whether the minimal window should have a frame for moving and resizing.</string>
   </property>
  </action>
  <action name="qaConfigCert">
   <property name="text">
    <string>&amp;Certificate Wizard...</string>
   </property>
   <property name="toolTip">
    <string>Configure certificates for strong authentication</string>
   </property>
   <property name="whatsThis">
    <string>This starts the wizard for creating, importing and exporting certificates for authentication against servers.</string>
   </property>
  </action>
  <action name="qaUserRegister">
   <property name="text">
    <string>&amp;Register...</string>
   </property>
   <property name="toolTip">
    <string>Register user on server</string>
   </property>
   <property name="whatsThis">
    <string>This will permanently register the user on the server.</string>
   </property>
  </action>
  <action name="qaUserFriendAdd">
   <property name="text">
    <string>Add &amp;Friend</string>
   </property>
   <property name="toolTip">
    <string>Adds a user as your friend.</string>
   </property>
   <property name="whatsThis">
    <string>This will add the user as a friend, so you can recognize him on this and other servers.</string>
   </property>
  </action>
  <action name="qaUserFriendRemove">
   <property name="text">
    <string>&amp;Remove Friend</string>
   </property>
   <property name="toolTip">
    <string>Removes a user from your friends.</string>
   </property>
   <property name="whatsThis">
    <string>This will remove a user from your friends list.</string>
   </property>
  </action>
  <action name="qaUserFriendUpdate">
   <property name="text">
    <string>&amp;Update Friend</string>
   </property>
   <property name="toolTip">
    <string>Update name of your friend.</string>
   </property>
   <property name="whatsThis">
    <string>Your friend uses a different name than what is in your database. This will update the name.</string>
   </property>
  </action>
  <action name="qaServerUserList">
   <property name="text">
    <string>Registered &amp;Users...</string>
   </property>
   <property name="toolTip">
    <string>Edit registered users list</string>
   </property>
   <property name="whatsThis">
    <string>This opens the editor for registered users, which allow you to change their name or unregister them.</string>
   </property>
  </action>
  <action name="qaServerTexture">
   <property name="text">
    <string>Change &amp;Avatar...</string>
   </property>
   <property name="toolTip">
    <string>Change your avatar image on this server</string>
   </property>
  </action>
  <action name="qaServerTokens">
   <property name="text">
    <string>&amp;Access Tokens...</string>
   </property>
   <property name="toolTip">
    <string>Add or remove text-based access tokens</string>
   </property>
  </action>
  <action name="qaServerTextureRemove">
   <property name="text">
    <string>&amp;Remove Avatar</string>
   </property>
   <property name="toolTip">
    <string>Remove currently defined avatar image.</string>
   </property>
  </action>
  <action name="qaUserCommentReset">
   <property name="text">
    <string>Reset &amp;Comment...</string>
   </property>
   <property name="toolTip">
    <string>Reset the comment of the selected user.</string>
   </property>
  </action>
  <action name="qaUserTextureReset">
   <property name="text">
    <string>Reset &amp;Avatar...</string>
   </property>
   <property name="toolTip">
    <string>Reset the avatar of the selected user.</string>
   </property>
  </action>
  <action name="qaChannelJoin">
   <property name="text">
    <string>&amp;Join Channel</string>
   </property>
  </action>
  <action name="qaChannelFilter">
   <property name="checkable">
    <bool>true</bool>
   </property>
   <property name="text">
    <string>&amp;Hide Channel when Filtering</string>
   </property>
  </action>
  <action name="qaUserCommentView">
   <property name="text">
    <string>View Comment...</string>
   </property>
   <property name="toolTip">
    <string>View comment in editor</string>
   </property>
  </action>
  <action name="qaUserInformation">
   <property name="text">
    <string>&amp;Information...</string>
   </property>
   <property name="toolTip">
    <string>Query server for connection information for user</string>
   </property>
  </action>
  <action name="qaSelfComment">
   <property name="icon">
    <iconset>
     <normaloff>skin:self_comment.svg</normaloff>skin:self_comment.svg</iconset>
   </property>
   <property name="text">
    <string>&amp;Change Comment...</string>
   </property>
   <property name="toolTip">
    <string>Change your own comment</string>
   </property>
   <property name="iconVisibleInMenu">
    <bool>false</bool>
   </property>
  </action>
  <action name="qaSelfRegister">
   <property name="text">
    <string>R&amp;egister...</string>
   </property>
   <property name="toolTip">
    <string>Register yourself on the server</string>
   </property>
  </action>
  <action name="qaUserPrioritySpeaker">
   <property name="checkable">
    <bool>true</bool>
   </property>
   <property name="text">
    <string>Priority Speaker</string>
   </property>
  </action>
  <action name="qaSelfPrioritySpeaker">
   <property name="checkable">
    <bool>true</bool>
   </property>
   <property name="text">
    <string>Priority Speaker</string>
   </property>
  </action>
  <action name="qaRecording">
   <property name="icon">
    <iconset>
     <normaloff>skin:actions/media-record.svg</normaloff>skin:actions/media-record.svg</iconset>
   </property>
   <property name="text">
    <string>Recording</string>
   </property>
   <property name="iconVisibleInMenu">
    <bool>false</bool>
   </property>
  </action>
  <action name="qaShow">
   <property name="text">
    <string>Show</string>
   </property>
   <property name="toolTip">
    <string>Shows the main Mumble window.</string>
   </property>
  </action>
  <action name="qaChannelListen">
   <property name="checkable">
    <bool>true</bool>
   </property>
   <property name="text">
    <string>Listen to channel</string>
   </property>
   <property name="toolTip">
    <string>Listen to this channel without joining it</string>
   </property>
  </action>
  <action name="qaListenerLocalVolume">
   <property name="text">
    <string>Local Volume Adjustment...</string>
   </property>
   <property name="toolTip">
    <string>Locally adjust the volume for this virtual ear.</string>
   </property>
  </action>
  <action name="qaTalkingUIToggle">
   <property name="checkable">
    <bool>true</bool>
   </property>
   <property name="text">
    <string>Talking UI</string>
   </property>
   <property name="toolTip">
    <string>Toggles the visibility of the TalkingUI.</string>
   </property>
  </action>
  <action name="qaUserJoin">
   <property name="text">
    <string>Join user's channel</string>
   </property>
   <property name="toolTip">
    <string>Joins the channel of this user.</string>
   </property>
  </action>
  <action name="qaUserLocalIgnoreTTS">
   <property name="checkable">
    <bool>true</bool>
   </property>
   <property name="text">
    <string>Disable Text-To-Speech</string>
   </property>
   <property name="toolTip">
    <string>Locally disable Text-To-Speech for this user's text chat messages.</string>
   </property>
   <property name="whatsThis">
    <string>Silently disables Text-To-Speech for all text messages from the user.</string>
   </property>
  </action>
 </widget>
 <customwidgets>
  <customwidget>
   <class>UserView</class>
   <extends>QTreeView</extends>
   <header>UserView.h</header>
  </customwidget>
  <customwidget>
   <class>ChatbarTextEdit</class>
   <extends>QTextEdit</extends>
   <header>CustomElements.h</header>
  </customwidget>
  <customwidget>
   <class>LogTextBrowser</class>
   <extends>QTextBrowser</extends>
   <header>CustomElements.h</header>
  </customwidget>
 </customwidgets>
 <resources/>
 <connections/>
</ui>
