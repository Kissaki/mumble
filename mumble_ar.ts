<?xml version="1.0" encoding="UTF-8"?>
<ui version="4.0">
 <class>BanEditor</class>
 <widget class="QDialog" name="BanEditor">
  <property name="geometry">
   <rect>
    <x>0</x>
    <y>0</y>
    <width>454</width>
    <height>470</height>
   </rect>
  </property>
  <property name="windowTitle">
   <string>Mumble - Edit Bans</string>
  </property>
  <layout class="QGridLayout" name="gridLayout_2">
   <item row="1" column="0">
    <widget class="QDialogButtonBox" name="qbbButtons">
     <property name="orientation">
      <enum>Qt::Horizontal</enum>
     </property>
     <property name="standardButtons">
      <set>QDialogButtonBox::Cancel|QDialogButtonBox::Ok</set>
     </property>
    </widget>
   </item>
   <item row="0" column="0">
    <widget class="QGroupBox" name="qgbBanList">
     <property name="title">
      <string>Ban List</string>
     </property>
     <layout class="QGridLayout" name="gridLayout">
      <item row="1" column="0" colspan="7">
       <widget class="QLineEdit" name="qleSearch">
        <property name="font">
         <font>
          <italic>false</italic>
         </font>
        </property>
        <property name="toolTip">
         <string>Search field</string>
        </property>
        <property name="whatsThis">
         <string>This is the search field. Use it to find bans that have this username set in the username field.</string>
        </property>
        <property name="alignment">
         <set>Qt::AlignCenter</set>
        </property>
        <property name="placeholderText">
         <string>Who are you looking for?</string>
        </property>
       </widget>
      </item>
      <item row="2" column="0">
       <widget class="QLabel" name="qlUser">
        <property name="text">
         <string>User</string>
        </property>
       </widget>
      </item>
      <item row="2" column="1" colspan="5">
       <widget class="QLineEdit" name="qleUser">
        <property name="font">
         <font>
          <italic>false</italic>
         </font>
        </property>
        <property name="placeholderText">
         <string>No nickname</string>
        </property>
       </widget>
      </item>
      <item row="3" column="0">
       <widget class="QLabel" name="qlIP">
        <property name="sizePolicy">
         <sizepolicy hsizetype="Maximum" vsizetype="Preferred">
          <horstretch>0</horstretch>
          <verstretch>0</verstretch>
         </sizepolicy>
        </property>
        <property name="text">
         <string>&amp;Address</string>
        </property>
        <property name="buddy">
         <cstring>qleIP</cstring>
        </property>
       </widget>
      </item>
      <item row="3" column="1" colspan="3">
       <widget class="QLineEdit" name="qleIP">
        <property name="sizePolicy">
         <sizepolicy hsizetype="Preferred" vsizetype="Fixed">
          <horstretch>0</horstretch>
          <verstretch>0</verstretch>
         </sizepolicy>
        </property>
        <property name="font">
         <font>
          <italic>false</italic>
         </font>
        </property>
        <property name="toolTip">
         <string>IP address</string>
        </property>
        <property name="text">
         <string/>
        </property>
        <property name="placeholderText">
         <string>No IP address</string>
        </property>
       </widget>
      </item>
      <item row="3" column="4">
       <widget class="QLabel" name="qlMask">
        <property name="sizePolicy">
         <sizepolicy hsizetype="Maximum" vsizetype="Preferred">
          <horstretch>0</horstretch>
          <verstretch>0</verstretch>
         </sizepolicy>
        </property>
        <property name="text">
         <string>&amp;Mask</string>
        </property>
        <property name="buddy">
         <cstring>qsbMask</cstring>
        </property>
       </widget>
      </item>
      <item row="3" column="5">
       <widget class="QSpinBox" name="qsbMask">
        <property name="minimum">
         <number>8</number>
        </property>
        <property name="maximum">
         <number>128</number>
        </property>
        <property name="value">
         <number>128</number>
        </property>
       </widget>
      </item>
      <item row="4" column="0">
       <widget class="QLabel" name="qlReason">
        <property name="text">
         <string>Reason</string>
        </property>
       </widget>
      </item>
      <item row="4" column="1" colspan="5">
       <widget class="QLineEdit" name="qleReason">
        <property name="toolTip">
         <string>Reason for the ban</string>
        </property>
        <property name="placeholderText">
         <string>No reason</string>
        </property>
       </widget>
      </item>
      <item row="5" column="0">
       <widget class="QLabel" name="qlStart">
        <property name="text">
         <string>Start</string>
        </property>
       </widget>
      </item>
      <item row="5" column="1">
       <widget class="QDateTimeEdit" name="qdteStart">
        <property name="enabled">
         <bool>false</bool>
        </property>
        <property name="readOnly">
         <bool>false</bool>
        </property>
        <property name="calendarPopup">
         <bool>false</bool>
        </property>
       </widget>
      </item>
      <item row="5" column="2">
       <widget class="QLabel" name="qlEnd">
        <property name="sizePolicy">
         <sizepolicy hsizetype="Maximum" vsizetype="Preferred">
          <horstretch>0</horstretch>
          <verstretch>0</verstretch>
         </sizepolicy>
        </property>
        <property name="text">
         <string>End</string>
        </property>
       </widget>
      </item>
      <item row="5" column="3" colspan="3">
       <widget class="QDateTimeEdit" name="qdteEnd">
        <property name="toolTip">
         <string>Ban end date</string>
        </property>
        <property name="whatsThis">
         <string>Ban end date. If you set the same date for start and end, the ban will be permanent (it will not expire).</string>
        </property>
        <property name="calendarPopup">
         <bool>true</bool>
        </property>
       </widget>
      </item>
      <item row="6" column="0">
       <widget class="QLabel" name="qliHash">
        <property name="text">
         <string>Hash</string>
        </property>
       </widget>
      </item>
      <item row="6" column="1" colspan="5">
       <widget class="QLineEdit" name="qleHash">
        <property name="toolTip">
         <string>Certificate hash</string>
        </property>
        <property name="inputMethodHints">
         <set>Qt::ImhLowercaseOnly|Qt::ImhNoAutoUppercase</set>
        </property>
        <property name="placeholderText">
         <string>No certificate hash</string>
        </property>
       </widget>
      </item>
      <item row="0" column="0" colspan="7">
       <widget class="QListWidget" name="qlwBans">
        <property name="toolTip">
         <string>Banned users</string>
        </property>
        <property name="whatsThis">
         <string>This is a list with banned users.</string>
        </property>
        <property name="alternatingRowColors">
         <bool>true</bool>
        </property>
        <property name="sortingEnabled">
         <bool>false</bool>
        </property>
       </widget>
      </item>
      <item row="2" column="6">
       <widget class="QPushButton" name="qpbAdd">
        <property name="enabled">
         <bool>false</bool>
        </property>
        <property name="toolTip">
         <string/>
        </property>
        <property name="whatsThis">
         <string>Use this button if you want to add a new ban.</string>
        </property>
        <property name="text">
         <string>&amp;Add</string>
        </property>
       </widget>
      </item>
      <item row="3" column="6">
       <widget class="QPushButton" name="qpbUpdate">
        <property name="enabled">
         <bool>false</bool>
        </property>
        <property name="toolTip">
         <string/>
        </property>
        <property name="whatsThis">
         <string>Use this button if you want to update ban information.</string>
        </property>
        <property name="text">
         <string>&amp;Update</string>
        </property>
       </widget>
      </item>
      <item row="4" column="6">
       <widget class="QPushButton" name="qpbRemove">
        <property name="enabled">
         <bool>false</bool>
        </property>
        <property name="whatsThis">
         <string>Use this button if you want to remove user from the ban list.</string>
        </property>
        <property name="text">
         <string>&amp;Remove</string>
        </property>
       </widget>
      </item>
      <item row="6" column="6">
       <widget class="QPushButton" name="qpbClear">
        <property name="toolTip">
         <string>Clear all fields</string>
        </property>
        <property name="whatsThis">
         <string>This button clears all fields. Use it if you want to add a new ban.</string>
        </property>
        <property name="text">
         <string>Clear</string>
        </property>
       </widget>
      </item>
     </layout>
    </widget>
   </item>
  </layout>
 </widget>
 <resources/>
 <connections>
  <connection>
   <sender>qbbButtons</sender>
   <signal>accepted()</signal>
   <receiver>BanEditor</receiver>
   <slot>accept()</slot>
   <hints>
    <hint type="sourcelabel">
     <x>227</x>
     <y>617</y>
    </hint>
    <hint type="destinationlabel">
     <x>157</x>
     <y>274</y>
    </hint>
   </hints>
  </connection>
  <connection>
   <sender>qbbButtons</sender>
   <signal>rejected()</signal>
   <receiver>BanEditor</receiver>
   <slot>reject()</slot>
   <hints>
    <hint type="sourcelabel">
     <x>295</x>
     <y>623</y>
    </hint>
    <hint type="destinationlabel">
     <x>286</x>
     <y>274</y>
    </hint>
   </hints>
  </connection>
 </connections>
</ui>
