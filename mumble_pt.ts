<?xml version="1.0" encoding="UTF-8"?>
<ui version="4.0">
 <class>LookConfig</class>
 <widget class="QWidget" name="LookConfig">
  <property name="geometry">
   <rect>
    <x>0</x>
    <y>0</y>
    <width>728</width>
    <height>1148</height>
   </rect>
  </property>
  <property name="windowTitle">
   <string notr="true">Form</string>
  </property>
  <layout class="QGridLayout" name="gridLayout_4">
   <item row="4" column="1">
    <widget class="QGroupBox" name="groupBox">
     <property name="sizePolicy">
      <sizepolicy hsizetype="Minimum" vsizetype="Preferred">
       <horstretch>0</horstretch>
       <verstretch>0</verstretch>
      </sizepolicy>
     </property>
     <property name="title">
      <string>Talking UI</string>
     </property>
     <property name="flat">
      <bool>false</bool>
     </property>
     <property name="checkable">
      <bool>false</bool>
     </property>
     <layout class="QGridLayout" name="gridLayout_5">
      <property name="horizontalSpacing">
       <number>6</number>
      </property>
      <item row="7" column="0">
       <widget class="QLabel" name="qlChannelHierarchyDepth">
        <property name="toolTip">
         <string>The names of how many parent channels should be included in the channel's name when displaying it in the TalkingUI?</string>
        </property>
        <property name="text">
         <string>Channel hierarchy depth</string>
        </property>
       </widget>
      </item>
      <item row="7" column="1">
       <widget class="QSpinBox" name="qsbChannelHierarchyDepth">
        <property name="toolTip">
         <string>The names of how many parent channels should be included in the channel's name when displaying it in the TalkingUI?</string>
        </property>
       </widget>
      </item>
      <item row="14" column="1">
       <widget class="QLineEdit" name="qleAbbreviationReplacement">
        <property name="sizePolicy">
         <sizepolicy hsizetype="Preferred" vsizetype="Fixed">
          <horstretch>0</horstretch>
          <verstretch>0</verstretch>
         </sizepolicy>
        </property>
        <property name="toolTip">
         <string>String that gets used instead of the cut-out part of an abbreviated name.</string>
        </property>
       </widget>
      </item>
      <item row="13" column="0">
       <widget class="QLabel" name="qlChannelSeparator">
        <property name="toolTip">
         <string>String to separate a channel name from its parent's.</string>
        </property>
        <property name="text">
         <string>Channel separator</string>
        </property>
       </widget>
      </item>
      <item row="4" column="1">
       <widget class="QSpinBox" name="qsbRelFontSize">
        <property name="toolTip">
         <string>Relative font size to use in the Talking UI in percent.</string>
        </property>
        <property name="minimum">
         <number>1</number>
        </property>
        <property name="maximum">
         <number>500</number>
        </property>
       </widget>
      </item>
      <item row="0" column="0">
       <widget class="QCheckBox" name="qcbLocalUserVisible">
        <property name="toolTip">
         <string>If this is checked, the local user (yourself) will always be visible in the TalkingUI (regardless of talking state).</string>
        </property>
        <property name="text">
         <string>Always keep local user visible</string>
        </property>
       </widget>
      </item>
      <item row="9" column="1">
       <widget class="QSpinBox" name="qsbMaxNameLength">
        <property name="toolTip">
         <string>The preferred maximum length of a channel (hierarchy) name in the Talking UI. Note that this is not a hard limit though.</string>
        </property>
       </widget>
      </item>
      <item row="10" column="0">
       <widget class="QLabel" name="qlPrefixCharCount">
        <property name="toolTip">
         <string>How many characters from the original name to display at the beginning of an abbreviated name.</string>
        </property>
        <property name="text">
         <string>Abbreviated prefix characters</string>
        </property>
       </widget>
      </item>
      <item row="5" column="1">
       <widget class="QSpinBox" name="qsbSilentUserLifetime">
        <property name="sizePolicy">
         <sizepolicy hsizetype="Preferred" vsizetype="Fixed">
          <horstretch>0</horstretch>
          <verstretch>0</verstretch>
         </sizepolicy>
        </property>
        <property name="toolTip">
         <string>A user that is silent for the given amount of seconds will be removed from the Talkin UI.</string>
        </property>
       </widget>
      </item>
      <item row="11" column="1">
       <widget class="QSpinBox" name="qsbPostfixCharCount">
        <property name="toolTip">
         <string>How many characters from the original name to display at the end of an abbreviated name.</string>
        </property>
       </widget>
      </item>
      <item row="9" column="0">
       <widget class="QLabel" name="qlMaxNameLength">
        <property name="toolTip">
         <string>The preferred maximum length of a channel (hierarchy) name in the Talking UI. Note that this is not a hard limit though.</string>
        </property>
        <property name="text">
         <string>Max. channel name length</string>
        </property>
       </widget>
      </item>
      <item row="2" column="0" colspan="2">
       <widget class="QCheckBox" name="qcbAbbreviateCurrentChannel">
        <property name="toolTip">
         <string>Whether to also allow abbreviating the current channel of a user (instead of only its parent channels).</string>
        </property>
        <property name="text">
         <string>Abbreviate current channel name</string>
        </property>
       </widget>
      </item>
      <item row="5" column="0">
       <widget class="QLabel" name="qlSilentUserLifetime">
        <property name="sizePolicy">
         <sizepolicy hsizetype="Preferred" vsizetype="Preferred">
          <horstretch>0</horstretch>
          <verstretch>0</verstretch>
         </sizepolicy>
        </property>
        <property name="toolTip">
         <string>A user that is silent for the given amount of seconds will be removed from the Talkin UI.</string>
        </property>
        <property name="text">
         <string>Remove silent user after</string>
        </property>
       </widget>
      </item>
      <item row="1" column="0" colspan="2">
       <widget class="QCheckBox" name="qcbAbbreviateChannelNames">
        <property name="toolTip">
         <string>Whether the channel (hierarchy) name should be abbreviated, if it exceeds the specified maximum length.</string>
        </property>
        <property name="text">
         <string>Abbreviate channel names</string>
        </property>
       </widget>
      </item>
      <item row="11" column="0">
       <widget class="QLabel" name="qlPostfixCharCount">
        <property name="toolTip">
         <string>How many characters from the original name to display at the end of an abbreviated name.</string>
        </property>
        <property name="text">
         <string>Abbreviated postfix characters</string>
        </property>
       </widget>
      </item>
      <item row="14" column="0">
       <widget class="QLabel" name="qlAbbreviationReplacement">
        <property name="toolTip">
         <string>String that gets used instead of the cut-out part of an abbreviated name.</string>
        </property>
        <property name="text">
         <string>Abbreviation replacement</string>
        </property>
       </widget>
      </item>
      <item row="10" column="1">
       <widget class="QSpinBox" name="qsbPrefixCharCount">
        <property name="toolTip">
         <string>How many characters from the original name to display at the beginning of an abbreviated name.</string>
        </property>
       </widget>
      </item>
      <item row="13" column="1">
       <widget class="QLineEdit" name="qleChannelSeparator">
        <property name="sizePolicy">
         <sizepolicy hsizetype="Preferred" vsizetype="Fixed">
          <horstretch>0</horstretch>
          <verstretch>0</verstretch>
         </sizepolicy>
        </property>
        <property name="toolTip">
         <string>String to separate a channel name from its parent's.</string>
        </property>
       </widget>
      </item>
      <item row="4" column="0">
       <widget class="QLabel" name="qlRelFontSize">
        <property name="toolTip">
         <string>Relative font size to use in the Talking UI in percent.</string>
        </property>
        <property name="text">
         <string>Rel. font size (%)</string>
        </property>
       </widget>
      </item>
      <item row="3" column="0" colspan="2">
       <widget class="QCheckBox" name="qcbShowLocalListeners">
        <property name="toolTip">
         <string>Whether to show all of the local user's listeners (ears) in the TalkingUI (and thereby also the channels they are in). </string>
        </property>
        <property name="text">
         <string>Show local user's listeners (ears)</string>
        </property>
       </widget>
      </item>
     </layout>
    </widget>
   </item>
   <item row="0" column="0" colspan="2">
    <widget class="QGroupBox" name="qgbLayout">
     <property name="title">
      <string>Layout</string>
     </property>
     <layout class="QGridLayout" name="gridLayoutLayout">
      <item row="0" column="5">
       <widget class="QLabel" name="qlLHybrid">
        <property name="sizePolicy">
         <sizepolicy hsizetype="Preferred" vsizetype="Preferred">
          <horstretch>0</horstretch>
          <verstretch>0</verstretch>
         </sizepolicy>
        </property>
        <property name="text">
         <string/>
        </property>
        <property name="pixmap">
         <pixmap>skin:layout_hybrid.svg</pixmap>
        </property>
        <property name="scaledContents">
         <bool>false</bool>
        </property>
       </widget>
      </item>
      <item row="1" column="5">
       <widget class="QRadioButton" name="qrbLHybrid">
        <property name="sizePolicy">
         <sizepolicy hsizetype="Preferred" vsizetype="Fixed">
          <horstretch>0</horstretch>
          <verstretch>0</verstretch>
         </sizepolicy>
        </property>
        <property name="text">
         <string>Hybrid</string>
        </property>
        <property name="iconSize">
         <size>
          <width>64</width>
          <height>64</height>
         </size>
        </property>
       </widget>
      </item>
      <item row="1" column="7">
       <widget class="QRadioButton" name="qrbLCustom">
        <property name="sizePolicy">
         <sizepolicy hsizetype="Preferred" vsizetype="Fixed">
          <horstretch>0</horstretch>
          <verstretch>0</verstretch>
         </sizepolicy>
        </property>
        <property name="text">
         <string>Custom</string>
        </property>
       </widget>
      </item>
      <item row="0" column="7">
       <widget class="QLabel" name="qlLCustom">
        <property name="text">
         <string/>
        </property>
        <property name="pixmap">
         <pixmap>skin:layout_custom.svg</pixmap>
        </property>
       </widget>
      </item>
      <item row="1" column="3">
       <widget class="QRadioButton" name="qrbLStacked">
        <property name="sizePolicy">
         <sizepolicy hsizetype="Preferred" vsizetype="Fixed">
          <horstretch>0</horstretch>
          <verstretch>0</verstretch>
         </sizepolicy>
        </property>
        <property name="text">
         <string>Stacked</string>
        </property>
        <property name="iconSize">
         <size>
          <width>64</width>
          <height>64</height>
         </size>
        </property>
       </widget>
      </item>
      <item row="1" column="1">
       <widget class="QRadioButton" name="qrbLClassic">
        <property name="sizePolicy">
         <sizepolicy hsizetype="Preferred" vsizetype="Fixed">
          <horstretch>0</horstretch>
          <verstretch>0</verstretch>
         </sizepolicy>
        </property>
        <property name="text">
         <string>Classic</string>
        </property>
        <property name="iconSize">
         <size>
          <width>64</width>
          <height>64</height>
         </size>
        </property>
       </widget>
      </item>
      <item row="1" column="2">
       <spacer name="horizontalSpacer_4">
        <property name="orientation">
         <enum>Qt::Horizontal</enum>
        </property>
        <property name="sizeHint" stdset="0">
         <size>
          <width>40</width>
          <height>20</height>
         </size>
        </property>
       </spacer>
      </item>
      <item row="0" column="1">
       <widget class="QLabel" name="qlLClassic">
        <property name="sizePolicy">
         <sizepolicy hsizetype="Preferred" vsizetype="Preferred">
          <horstretch>0</horstretch>
          <verstretch>0</verstretch>
         </sizepolicy>
        </property>
        <property name="pixmap">
         <pixmap>skin:layout_classic.svg</pixmap>
        </property>
       </widget>
      </item>
      <item row="0" column="3">
       <widget class="QLabel" name="qlLStacked">
        <property name="sizePolicy">
         <sizepolicy hsizetype="Preferred" vsizetype="Preferred">
          <horstretch>0</horstretch>
          <verstretch>0</verstretch>
         </sizepolicy>
        </property>
        <property name="text">
         <string/>
        </property>
        <property name="pixmap">
         <pixmap>skin:layout_stacked.svg</pixmap>
        </property>
       </widget>
      </item>
      <item row="1" column="4">
       <spacer name="horizontalSpacer_5">
        <property name="orientation">
         <enum>Qt::Horizontal</enum>
        </property>
        <property name="sizeHint" stdset="0">
         <size>
          <width>40</width>
          <height>20</height>
         </size>
        </property>
       </spacer>
      </item>
      <item row="1" column="0">
       <spacer name="horizontalSpacer_2">
        <property name="orientation">
         <enum>Qt::Horizontal</enum>
        </property>
        <property name="sizeHint" stdset="0">
         <size>
          <width>40</width>
          <height>20</height>
         </size>
        </property>
       </spacer>
      </item>
      <item row="1" column="8">
       <spacer name="horizontalSpacer_3">
        <property name="orientation">
         <enum>Qt::Horizontal</enum>
        </property>
        <property name="sizeHint" stdset="0">
         <size>
          <width>40</width>
          <height>20</height>
         </size>
        </property>
       </spacer>
      </item>
      <item row="1" column="6">
       <spacer name="horizontalSpacer_6">
        <property name="orientation">
         <enum>Qt::Horizontal</enum>
        </property>
        <property name="sizeHint" stdset="0">
         <size>
          <width>40</width>
          <height>20</height>
         </size>
        </property>
       </spacer>
      </item>
     </layout>
    </widget>
   </item>
   <item row="1" column="0" rowspan="4">
    <widget class="QGroupBox" name="qgbLookFeel">
     <property name="title">
      <string>Look and Feel</string>
     </property>
     <layout class="QGridLayout" name="gridLayout">
      <item row="3" column="0" colspan="2">
       <widget class="MUComboBox" name="qcbLanguage">
        <property name="toolTip">
         <string>Language to use (requires restart)</string>
        </property>
        <property name="whatsThis">
         <string>&lt;b&gt;This sets which language Mumble should use.&lt;/b&gt;&lt;br /&gt;You have to restart Mumble to use the new language.</string>
        </property>
       </widget>
      </item>
      <item row="0" column="0">
       <widget class="QLabel" name="qliTheme">
        <property name="text">
         <string>Theme</string>
        </property>
       </widget>
      </item>
      <item row="1" column="0" colspan="2">
       <widget class="MUComboBox" name="qcbTheme">
        <property name="sizePolicy">
         <sizepolicy hsizetype="Preferred" vsizetype="Fixed">
          <horstretch>0</horstretch>
          <verstretch>0</verstretch>
         </sizepolicy>
        </property>
        <property name="toolTip">
         <string>Theme to use to style the user interface</string>
        </property>
        <property name="whatsThis">
         <string>&lt;b&gt;Configures which theme the Mumble user interface should be styled with&lt;/b&gt;&lt;br /&gt;Mumble will pick up themes from certain directories and display them in this list. The one you select will be used to customize the visual appearance of Mumble. This includes colors, icons and more.</string>
        </property>
       </widget>
      </item>
      <item row="5" column="0" colspan="2">
       <widget class="QCheckBox" name="qcbShowTransmitModeComboBox">
        <property name="text">
         <string>Show transmit mode dropdown in toolbar</string>
        </property>
       </widget>
      </item>
      <item row="4" column="0" colspan="2">
       <widget class="QCheckBox" name="qcbHighContrast">
        <property name="toolTip">
         <string>Apply some high contrast optimizations for visually impaired users</string>
        </property>
        <property name="text">
         <string>Optimize for high contrast</string>
        </property>
       </widget>
      </item>
      <item row="6" column="0">
       <spacer name="verticalSpacer">
        <property name="orientation">
         <enum>Qt::Vertical</enum>
        </property>
        <property name="sizeHint" stdset="0">
         <size>
          <width>20</width>
          <height>40</height>
         </size>
        </property>
       </spacer>
      </item>
      <item row="2" column="0">
       <widget class="QLabel" name="qliLanguage">
        <property name="text">
         <string>Language</string>
        </property>
        <property name="buddy">
         <cstring>qcbLanguage</cstring>
        </property>
       </widget>
      </item>
      <item row="0" column="1">
       <widget class="QLabel" name="qlThemesDirectory">
        <property name="text">
         <string/>
        </property>
        <property name="alignment">
         <set>Qt::AlignRight|Qt::AlignTrailing|Qt::AlignVCenter</set>
        </property>
       </widget>
      </item>
     </layout>
    </widget>
   </item>
   <item row="2" column="1">
    <widget class="QGroupBox" name="qgbTray">
     <property name="title">
      <string>Tray Icon</string>
     </property>
     <layout class="QVBoxLayout" name="verticalLayout">
      <item>
       <widget class="QCheckBox" name="qcbHideTray">
        <property name="toolTip">
         <string>Hide the main Mumble window in the tray when it is minimized.</string>
        </property>
        <property name="whatsThis">
         <string>&lt;b&gt;If set, minimizing the Mumble main window will cause it to be hidden and accessible only from the tray. Otherwise, it will be minimized as a window normally would.&lt;/b&gt;</string>
        </property>
        <property name="text">
         <string>Hide in tray when minimized</string>
        </property>
       </widget>
      </item>
      <item>
       <widget class="QCheckBox" name="qcbStateInTray">
        <property name="toolTip">
         <string>Displays talking status in system tray</string>
        </property>
        <property name="whatsThis">
         <string/>
        </property>
        <property name="text">
         <string>Show talking status in tray icon</string>
        </property>
       </widget>
      </item>
     </layout>
    </widget>
   </item>
   <item row="1" column="1">
    <widget class="QGroupBox" name="qgbApplication">
     <property name="title">
      <string>Application</string>
     </property>
     <layout class="QGridLayout" name="gridLayout_3" columnstretch="0,0">
      <item row="0" column="0">
       <widget class="QLabel" name="qliAlwaysOnTop">
        <property name="text">
         <string>Always On Top</string>
        </property>
       </widget>
      </item>
      <item row="0" column="1">
       <widget class="MUComboBox" name="qcbAlwaysOnTop">
        <property name="toolTip">
         <string>This setting controls when the application will be always on top.</string>
        </property>
        <property name="whatsThis">
         <string>This setting controls in which situations the application will stay always on top. If you select &lt;i&gt;Never&lt;/i&gt; the application will not stay on top. &lt;i&gt;Always&lt;/i&gt; will always keep the application on top. &lt;i&gt;In minimal view&lt;/i&gt; / &lt;i&gt;In normal view&lt;/i&gt; will only keep the application always on top when minimal view is activated / deactivated.</string>
        </property>
        <item>
         <property name="text">
          <string>Never</string>
         </property>
        </item>
        <item>
         <property name="text">
          <string>Always</string>
         </property>
        </item>
        <item>
         <property name="text">
          <string>In minimal view</string>
         </property>
        </item>
        <item>
         <property name="text">
          <string>In normal view</string>
         </property>
        </item>
       </widget>
      </item>
      <item row="1" column="0" colspan="2">
       <widget class="QCheckBox" name="qcbShowContextMenuInMenuBar">
        <property name="toolTip">
         <string>Adds user and channel context menus into the menu bar</string>
        </property>
        <property name="text">
         <string>Show context menu in menu bar</string>
        </property>
       </widget>
      </item>
      <item row="2" column="0" colspan="2">
       <widget class="QCheckBox" name="qcbAskOnQuit">
        <property name="toolTip">
         <string>Ask whether to close or minimize when quitting Mumble.</string>
        </property>
        <property name="whatsThis">
         <string>&lt;b&gt;If set, will verify you want to quit if connected.&lt;/b&gt;</string>
        </property>
        <property name="text">
         <string>Ask on quit while connected</string>
        </property>
       </widget>
      </item>
      <item row="3" column="0" colspan="2">
       <widget class="QCheckBox" name="qcbEnableDeveloperMenu">
        <property name="whatsThis">
         <string>&lt;b&gt;Enable Developer menu&lt;/b&gt;&lt;br /&gt;This enables the &quot;Developer&quot;-menu in Mumble. This menu is used for developer-specific features, such as the Developer Console.</string>
        </property>
        <property name="text">
         <string>Enable Developer menu</string>
        </property>
       </widget>
      </item>
      <item row="4" column="0" colspan="2">
       <widget class="QCheckBox" name="qcbLockLayout">
        <property name="whatsThis">
         <string>When in custom layout mode, checking this disables rearranging.</string>
        </property>
        <property name="text">
         <string>Lock layout</string>
        </property>
       </widget>
      </item>
     </layout>
    </widget>
   </item>
   <item row="5" column="1">
    <spacer name="horizontalSpacer">
     <property name="orientation">
      <enum>Qt::Horizontal</enum>
     </property>
     <property name="sizeHint" stdset="0">
      <size>
       <width>40</width>
       <height>20</height>
      </size>
     </property>
    </spacer>
   </item>
   <item row="3" column="1">
    <widget class="QGroupBox" name="qgbChannel">
     <property name="title">
      <string>Channel Tree</string>
     </property>
     <layout class="QGridLayout" name="gridLayout_2" columnstretch="0,0">
      <item row="7" column="0" colspan="2">
       <widget class="QCheckBox" name="qcbFilterHidesEmptyChannels">
        <property name="text">
         <string>Filter automatically hides empty channels</string>
        </property>
       </widget>
      </item>
      <item row="2" column="1">
       <widget class="MUComboBox" name="qcbExpand">
        <property name="toolTip">
         <string>When to automatically expand channels</string>
        </property>
        <property name="whatsThis">
         <string>This sets which channels to automatically expand. &lt;i&gt;None&lt;/i&gt; and &lt;i&gt;All&lt;/i&gt; will expand no or all channels, while &lt;i&gt;Only with users&lt;/i&gt; will expand and collapse channels as users join and leave them.</string>
        </property>
       </widget>
      </item>
      <item row="1" column="1">
       <widget class="MUComboBox" name="qcbUserDrag">
        <property name="toolTip">
         <string>This changes the behavior when moving users.</string>
        </property>
        <property name="whatsThis">
         <string>This sets the behavior of user drags; it can be used to prevent accidental dragging. &lt;i&gt;Move&lt;/i&gt; moves the user without prompting. &lt;i&gt;Do Nothing&lt;/i&gt; does nothing and prints an error message. &lt;i&gt;Ask&lt;/i&gt; uses a message box to confirm if you really wanted to move the user.</string>
        </property>
       </widget>
      </item>
      <item row="1" column="0">
       <widget class="QLabel" name="qliUserDrag">
        <property name="text">
         <string>User Dragging</string>
        </property>
       </widget>
      </item>
      <item row="0" column="0">
       <widget class="QLabel" name="qliChannelDrag">
        <property name="text">
         <string>Channel Dragging</string>
        </property>
       </widget>
      </item>
      <item row="6" column="0" colspan="2">
       <widget class="QCheckBox" name="qcbChatBarUseSelection">
        <property name="text">
         <string>Use selected item as the chat bar target</string>
        </property>
       </widget>
      </item>
      <item row="2" column="0">
       <widget class="QLabel" name="qliExpand">
        <property name="text">
         <string>Expand</string>
        </property>
       </widget>
      </item>
      <item row="4" column="0" colspan="2">
       <widget class="QCheckBox" name="qcbShowUserCount">
        <property name="toolTip">
         <string>Show number of users in each channel</string>
        </property>
        <property name="text">
         <string>Show channel user count</string>
        </property>
       </widget>
      </item>
      <item row="0" column="1">
       <widget class="MUComboBox" name="qcbChannelDrag">
        <property name="toolTip">
         <string>This changes the behavior when moving channels.</string>
        </property>
        <property name="whatsThis">
         <string>This sets the behavior of channel drags; it can be used to prevent accidental dragging. &lt;i&gt;Move&lt;/i&gt; moves the channel without prompting. &lt;i&gt;Do Nothing&lt;/i&gt; does nothing and prints an error message. &lt;i&gt;Ask&lt;/i&gt; uses a message box to confirm if you really wanted to move the channel.</string>
        </property>
       </widget>
      </item>
      <item row="3" column="0" colspan="2">
       <widget class="QCheckBox" name="qcbUsersTop">
        <property name="toolTip">
         <string>List users above subchannels (requires restart).</string>
        </property>
        <property name="whatsThis">
         <string>&lt;b&gt;If set, users will be shown above subchannels in the channel view.&lt;/b&gt;&lt;br /&gt;A restart of Mumble is required to see the change.</string>
        </property>
        <property name="text">
         <string>Users above Channels</string>
        </property>
       </widget>
      </item>
      <item row="5" column="0" colspan="2">
       <widget class="QCheckBox" name="qcbShowVolumeAdjustments">
        <property name="toolTip">
         <string>Show the local volume adjustment for each user (if any).</string>
        </property>
        <property name="text">
         <string>Show volume adjustments</string>
        </property>
       </widget>
      </item>
     </layout>
    </widget>
   </item>
   <item row="6" column="1">
    <spacer name="verticalSpacer_2">
     <property name="orientation">
      <enum>Qt::Vertical</enum>
     </property>
     <property name="sizeHint" stdset="0">
      <size>
       <width>20</width>
       <height>40</height>
      </size>
     </property>
    </spacer>
   </item>
  </layout>
 </widget>
 <customwidgets>
  <customwidget>
   <class>MUComboBox</class>
   <extends>QComboBox</extends>
   <header>widgets/MUComboBox.h</header>
  </customwidget>
 </customwidgets>
 <resources/>
 <connections/>
</ui>
