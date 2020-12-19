<?xml version="1.0" encoding="UTF-8"?>
<ui version="4.0">
 <class>UserEdit</class>
 <widget class="QDialog" name="UserEdit">
  <property name="geometry">
   <rect>
    <x>0</x>
    <y>0</y>
    <width>542</width>
    <height>470</height>
   </rect>
  </property>
  <property name="minimumSize">
   <size>
    <width>381</width>
    <height>470</height>
   </size>
  </property>
  <property name="windowTitle">
   <string/>
  </property>
  <layout class="QGridLayout" name="gridLayout_2">
   <item row="1" column="0">
    <widget class="QDialogButtonBox" name="qbbButtons">
     <property name="sizePolicy">
      <sizepolicy hsizetype="Expanding" vsizetype="Minimum">
       <horstretch>0</horstretch>
       <verstretch>0</verstretch>
      </sizepolicy>
     </property>
     <property name="orientation">
      <enum>Qt::Horizontal</enum>
     </property>
     <property name="standardButtons">
      <set>QDialogButtonBox::Cancel|QDialogButtonBox::Ok</set>
     </property>
    </widget>
   </item>
   <item row="0" column="0">
    <widget class="QGroupBox" name="qgbUserList">
     <property name="title">
      <string>Registered Users</string>
     </property>
     <layout class="QGridLayout" name="gridLayout">
      <item row="2" column="0">
       <widget class="QPushButton" name="qpbRename">
        <property name="enabled">
         <bool>false</bool>
        </property>
        <property name="sizePolicy">
         <sizepolicy hsizetype="Minimum" vsizetype="Fixed">
          <horstretch>0</horstretch>
          <verstretch>0</verstretch>
         </sizepolicy>
        </property>
        <property name="text">
         <string>Rename</string>
        </property>
       </widget>
      </item>
      <item row="2" column="1">
       <widget class="QPushButton" name="qpbRemove">
        <property name="enabled">
         <bool>false</bool>
        </property>
        <property name="text">
         <string>Remove</string>
        </property>
        <property name="flat">
         <bool>false</bool>
        </property>
       </widget>
      </item>
      <item row="1" column="0" colspan="6">
       <widget class="QLineEdit" name="qlSearch">
        <property name="font">
         <font>
          <italic>true</italic>
         </font>
        </property>
        <property name="text">
         <string/>
        </property>
        <property name="alignment">
         <set>Qt::AlignCenter</set>
        </property>
        <property name="placeholderText">
         <string>Who are you looking for?</string>
        </property>
       </widget>
      </item>
      <item row="2" column="5">
       <widget class="MUComboBox" name="qcbInactive">
        <property name="sizePolicy">
         <sizepolicy hsizetype="Minimum" vsizetype="Fixed">
          <horstretch>0</horstretch>
          <verstretch>0</verstretch>
         </sizepolicy>
        </property>
        <item>
         <property name="text">
          <string>Days</string>
         </property>
        </item>
        <item>
         <property name="text">
          <string>Weeks</string>
         </property>
        </item>
        <item>
         <property name="text">
          <string>Months</string>
         </property>
        </item>
        <item>
         <property name="text">
          <string>Years</string>
         </property>
        </item>
       </widget>
      </item>
      <item row="2" column="2">
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
      <item row="2" column="4">
       <widget class="QSpinBox" name="qsbInactive">
        <property name="sizePolicy">
         <sizepolicy hsizetype="MinimumExpanding" vsizetype="Fixed">
          <horstretch>0</horstretch>
          <verstretch>0</verstretch>
         </sizepolicy>
        </property>
        <property name="maximumSize">
         <size>
          <width>48</width>
          <height>16777215</height>
         </size>
        </property>
        <property name="frame">
         <bool>true</bool>
        </property>
        <property name="maximum">
         <number>9999</number>
        </property>
       </widget>
      </item>
      <item row="2" column="3">
       <widget class="QLabel" name="qlInactive">
        <property name="sizePolicy">
         <sizepolicy hsizetype="Minimum" vsizetype="Preferred">
          <horstretch>0</horstretch>
          <verstretch>0</verstretch>
         </sizepolicy>
        </property>
        <property name="text">
         <string>Inactive for</string>
        </property>
       </widget>
      </item>
      <item row="0" column="0" colspan="6">
       <widget class="QTreeView" name="qtvUserList">
        <property name="alternatingRowColors">
         <bool>true</bool>
        </property>
        <property name="selectionMode">
         <enum>QAbstractItemView::ExtendedSelection</enum>
        </property>
        <property name="rootIsDecorated">
         <bool>false</bool>
        </property>
        <property name="itemsExpandable">
         <bool>false</bool>
        </property>
        <property name="sortingEnabled">
         <bool>true</bool>
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
   <receiver>UserEdit</receiver>
   <slot>accept()</slot>
   <hints>
    <hint type="sourcelabel">
     <x>248</x>
     <y>254</y>
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
   <receiver>UserEdit</receiver>
   <slot>reject()</slot>
   <hints>
    <hint type="sourcelabel">
     <x>316</x>
     <y>260</y>
    </hint>
    <hint type="destinationlabel">
     <x>286</x>
     <y>274</y>
    </hint>
   </hints>
  </connection>
 </connections>
 <customwidgets>
  <customwidget>
   <class>MUComboBox</class>
   <extends>QComboBox</extends>
   <header>widgets/MUComboBox.h</header>
  </customwidget>
 </customwidgets>
</ui>
