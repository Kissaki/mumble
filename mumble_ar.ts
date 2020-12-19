<?xml version="1.0" encoding="UTF-8"?>
<ui version="4.0">
 <class>VoiceRecorderDialog</class>
 <widget class="QDialog" name="VoiceRecorderDialog">
  <property name="geometry">
   <rect>
    <x>0</x>
    <y>0</y>
    <width>450</width>
    <height>255</height>
   </rect>
  </property>
  <property name="windowTitle">
   <string>Recorder</string>
  </property>
  <property name="windowIcon">
   <iconset>
    <normaloff>:/actions/media-record.svg</normaloff>:/actions/media-record.svg</iconset>
  </property>
  <layout class="QGridLayout" name="gridLayout_2">
   <item row="0" column="0" colspan="2">
    <widget class="QGroupBox" name="qgbControl">
     <property name="title">
      <string>Control</string>
     </property>
     <layout class="QHBoxLayout" name="horizontalLayout_2">
      <item>
       <widget class="QLabel" name="qlTime">
        <property name="font">
         <font>
          <pointsize>20</pointsize>
          <weight>50</weight>
          <bold>false</bold>
          <underline>false</underline>
         </font>
        </property>
        <property name="text">
         <string>00:00:00</string>
        </property>
        <property name="alignment">
         <set>Qt::AlignCenter</set>
        </property>
       </widget>
      </item>
      <item>
       <spacer name="horizontalSpacer">
        <property name="orientation">
         <enum>Qt::Horizontal</enum>
        </property>
        <property name="sizeType">
         <enum>QSizePolicy::Minimum</enum>
        </property>
        <property name="sizeHint" stdset="0">
         <size>
          <width>20</width>
          <height>20</height>
         </size>
        </property>
       </spacer>
      </item>
      <item>
       <widget class="QPushButton" name="qpbStart">
        <property name="sizePolicy">
         <sizepolicy hsizetype="Expanding" vsizetype="Fixed">
          <horstretch>0</horstretch>
          <verstretch>0</verstretch>
         </sizepolicy>
        </property>
        <property name="text">
         <string>&amp;Start</string>
        </property>
       </widget>
      </item>
      <item>
       <widget class="QPushButton" name="qpbStop">
        <property name="enabled">
         <bool>false</bool>
        </property>
        <property name="sizePolicy">
         <sizepolicy hsizetype="Expanding" vsizetype="Fixed">
          <horstretch>0</horstretch>
          <verstretch>0</verstretch>
         </sizepolicy>
        </property>
        <property name="text">
         <string>S&amp;top</string>
        </property>
       </widget>
      </item>
     </layout>
    </widget>
   </item>
   <item row="1" column="1">
    <widget class="QGroupBox" name="qgbMode">
     <property name="title">
      <string>Mode</string>
     </property>
     <layout class="QVBoxLayout" name="verticalLayout">
      <item>
       <widget class="QRadioButton" name="qrbDownmix">
        <property name="enabled">
         <bool>true</bool>
        </property>
        <property name="text">
         <string>Downmix</string>
        </property>
        <property name="checkable">
         <bool>true</bool>
        </property>
        <property name="checked">
         <bool>true</bool>
        </property>
       </widget>
      </item>
      <item>
       <widget class="QRadioButton" name="qrbMultichannel">
        <property name="text">
         <string>Multichannel</string>
        </property>
       </widget>
      </item>
      <item>
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
     </layout>
    </widget>
   </item>
   <item row="1" column="0">
    <widget class="QGroupBox" name="qgbOutput">
     <property name="title">
      <string>Output</string>
     </property>
     <layout class="QFormLayout" name="formLayout">
      <item row="0" column="0">
       <widget class="QLabel" name="qlOutputFormat">
        <property name="text">
         <string>Output format</string>
        </property>
       </widget>
      </item>
      <item row="0" column="1">
       <widget class="MUComboBox" name="qcbFormat"/>
      </item>
      <item row="2" column="0">
       <widget class="QLabel" name="qlTargetDirectory">
        <property name="text">
         <string>Target directory</string>
        </property>
       </widget>
      </item>
      <item row="4" column="0">
       <widget class="QLabel" name="qlFilename">
        <property name="text">
         <string>Filename</string>
        </property>
       </widget>
      </item>
      <item row="2" column="1">
       <layout class="QHBoxLayout" name="qhblTargetDirectory">
        <item>
         <widget class="QLineEdit" name="qleTargetDirectory"/>
        </item>
        <item>
         <widget class="QPushButton" name="qpbTargetDirectoryBrowse">
          <property name="text">
           <string>&amp;Browse...</string>
          </property>
         </widget>
        </item>
       </layout>
      </item>
      <item row="4" column="1">
       <widget class="QLineEdit" name="qleFilename"/>
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
