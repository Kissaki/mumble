<?xml version="1.0" encoding="UTF-8"?>
<ui version="4.0">
 <class>ASIOConfig</class>
 <widget class="QWidget" name="ASIOConfig">
  <property name="geometry">
   <rect>
    <x>0</x>
    <y>0</y>
    <width>506</width>
    <height>434</height>
   </rect>
  </property>
  <property name="windowTitle">
   <string>ASIO</string>
  </property>
  <layout class="QVBoxLayout">
   <item>
    <widget class="QGroupBox" name="qgbDeviceSelection">
     <property name="title">
      <string>Device selection</string>
     </property>
     <layout class="QHBoxLayout">
      <item>
       <widget class="QLabel" name="qliDevice">
        <property name="text">
         <string>Device</string>
        </property>
        <property name="buddy">
         <cstring>qcbDevice</cstring>
        </property>
       </widget>
      </item>
      <item>
       <widget class="MUComboBox" name="qcbDevice">
        <property name="sizePolicy">
         <sizepolicy hsizetype="Preferred" vsizetype="Fixed">
          <horstretch>1</horstretch>
          <verstretch>0</verstretch>
         </sizepolicy>
        </property>
        <property name="toolTip">
         <string>Device to use for microphone</string>
        </property>
        <property name="whatsThis">
         <string>This chooses what device to query. You still need to actually query the device and select which channels to use.</string>
        </property>
       </widget>
      </item>
      <item>
       <widget class="QPushButton" name="qpbQuery">
        <property name="toolTip">
         <string>Query selected device</string>
        </property>
        <property name="whatsThis">
         <string>This queries the selected device for channels. Be aware that many ASIO drivers are buggy to the extreme, and querying them might cause a crash of either the application or the system.</string>
        </property>
        <property name="text">
         <string>&amp;Query</string>
        </property>
       </widget>
      </item>
      <item>
       <widget class="QPushButton" name="qpbConfig">
        <property name="toolTip">
         <string>Configure selected device</string>
        </property>
        <property name="whatsThis">
         <string>This configures the selected device. Be aware that many ASIO drivers are buggy to the extreme, and querying them might cause a crash of either the application or the system.</string>
        </property>
        <property name="text">
         <string>&amp;Configure</string>
        </property>
       </widget>
      </item>
     </layout>
    </widget>
   </item>
   <item>
    <widget class="QGroupBox" name="qgbCapabilities">
     <property name="title">
      <string>Capabilities</string>
     </property>
     <layout class="QGridLayout">
      <item row="0" column="0">
       <widget class="QLabel" name="qliName">
        <property name="text">
         <string>Driver name</string>
        </property>
       </widget>
      </item>
      <item row="0" column="1">
       <widget class="QLabel" name="qlName">
        <property name="sizePolicy">
         <sizepolicy hsizetype="Preferred" vsizetype="Preferred">
          <horstretch>1</horstretch>
          <verstretch>0</verstretch>
         </sizepolicy>
        </property>
        <property name="text">
         <string/>
        </property>
        <property name="textFormat">
         <enum>Qt::PlainText</enum>
        </property>
       </widget>
      </item>
      <item row="1" column="0">
       <widget class="QLabel" name="qliBuffers">
        <property name="text">
         <string>Buffer size</string>
        </property>
       </widget>
      </item>
      <item row="1" column="1">
       <widget class="QLabel" name="qlBuffers">
        <property name="sizePolicy">
         <sizepolicy hsizetype="Preferred" vsizetype="Preferred">
          <horstretch>1</horstretch>
          <verstretch>0</verstretch>
         </sizepolicy>
        </property>
        <property name="text">
         <string/>
        </property>
        <property name="textFormat">
         <enum>Qt::PlainText</enum>
        </property>
       </widget>
      </item>
     </layout>
    </widget>
   </item>
   <item>
    <widget class="QGroupBox" name="qgbChannels">
     <property name="toolTip">
      <string>Configure input channels</string>
     </property>
     <property name="whatsThis">
      <string>This will configure the input channels for ASIO. Make sure you select at least one channel as microphone and speaker. &lt;i&gt;Microphone&lt;/i&gt; should be where your microphone is attached, and &lt;i&gt;Speaker&lt;/i&gt; should be a channel that samples '&lt;i&gt;What you hear&lt;/i&gt;'.&lt;br /&gt;For example, on the Audigy 2 ZS, a good selection for Microphone would be '&lt;i&gt;Mic L&lt;/i&gt;' while Speaker should be '&lt;i&gt;Mix L&lt;/i&gt;' and '&lt;i&gt;Mix R&lt;/i&gt;'.</string>
     </property>
     <property name="title">
      <string>Channels</string>
     </property>
     <layout class="QHBoxLayout">
      <item>
       <spacer>
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
      <item>
       <layout class="QVBoxLayout">
        <item>
         <widget class="QLabel" name="qliMic">
          <property name="text">
           <string>Microphone</string>
          </property>
          <property name="buddy">
           <cstring>qlwMic</cstring>
          </property>
         </widget>
        </item>
        <item>
         <widget class="QListWidget" name="qlwMic">
          <property name="sizePolicy">
           <sizepolicy hsizetype="MinimumExpanding" vsizetype="MinimumExpanding">
            <horstretch>0</horstretch>
            <verstretch>0</verstretch>
           </sizepolicy>
          </property>
          <property name="maximumSize">
           <size>
            <width>120</width>
            <height>16777215</height>
           </size>
          </property>
         </widget>
        </item>
       </layout>
      </item>
      <item>
       <layout class="QVBoxLayout">
        <item>
         <spacer>
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
        <item>
         <widget class="QPushButton" name="qpbAddMic">
          <property name="maximumSize">
           <size>
            <width>30</width>
            <height>16777215</height>
           </size>
          </property>
          <property name="text">
           <string>&lt;-</string>
          </property>
         </widget>
        </item>
        <item>
         <widget class="QPushButton" name="qpbRemMic">
          <property name="maximumSize">
           <size>
            <width>30</width>
            <height>16777215</height>
           </size>
          </property>
          <property name="text">
           <string>-&gt;</string>
          </property>
         </widget>
        </item>
        <item>
         <spacer>
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
      </item>
      <item>
       <layout class="QVBoxLayout">
        <item>
         <widget class="QLabel" name="qliUnused">
          <property name="text">
           <string>Unused</string>
          </property>
          <property name="buddy">
           <cstring>qlwUnused</cstring>
          </property>
         </widget>
        </item>
        <item>
         <widget class="QListWidget" name="qlwUnused">
          <property name="sizePolicy">
           <sizepolicy hsizetype="MinimumExpanding" vsizetype="MinimumExpanding">
            <horstretch>0</horstretch>
            <verstretch>0</verstretch>
           </sizepolicy>
          </property>
          <property name="maximumSize">
           <size>
            <width>120</width>
            <height>16777215</height>
           </size>
          </property>
         </widget>
        </item>
       </layout>
      </item>
      <item>
       <layout class="QVBoxLayout">
        <item>
         <spacer>
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
        <item>
         <widget class="QPushButton" name="qpbAddSpeaker">
          <property name="maximumSize">
           <size>
            <width>30</width>
            <height>16777215</height>
           </size>
          </property>
          <property name="text">
           <string>-&gt;</string>
          </property>
         </widget>
        </item>
        <item>
         <widget class="QPushButton" name="qpbRemSpeaker">
          <property name="maximumSize">
           <size>
            <width>30</width>
            <height>16777215</height>
           </size>
          </property>
          <property name="text">
           <string>&lt;-</string>
          </property>
         </widget>
        </item>
        <item>
         <spacer>
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
      </item>
      <item>
       <layout class="QVBoxLayout">
        <item>
         <widget class="QLabel" name="qliSpeakers">
          <property name="text">
           <string>Speakers</string>
          </property>
          <property name="buddy">
           <cstring>qlwSpeaker</cstring>
          </property>
         </widget>
        </item>
        <item>
         <widget class="QListWidget" name="qlwSpeaker">
          <property name="sizePolicy">
           <sizepolicy hsizetype="MinimumExpanding" vsizetype="MinimumExpanding">
            <horstretch>0</horstretch>
            <verstretch>0</verstretch>
           </sizepolicy>
          </property>
          <property name="maximumSize">
           <size>
            <width>120</width>
            <height>16777215</height>
           </size>
          </property>
         </widget>
        </item>
       </layout>
      </item>
      <item>
       <spacer>
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
