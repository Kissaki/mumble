<?xml version="1.0" encoding="UTF-8"?>
<ui version="4.0">
 <class>ConfigDialog</class>
 <widget class="QDialog" name="ConfigDialog">
  <property name="geometry">
   <rect>
    <x>0</x>
    <y>0</y>
    <width>709</width>
    <height>505</height>
   </rect>
  </property>
  <property name="windowTitle">
   <string>Mumble Configuration</string>
  </property>
  <property name="sizeGripEnabled">
   <bool>true</bool>
  </property>
  <layout class="QGridLayout" name="gridLayout">
   <item row="0" column="0">
    <widget class="QListWidget" name="qlwIcons">
     <property name="sizePolicy">
      <sizepolicy hsizetype="Minimum" vsizetype="Expanding">
       <horstretch>0</horstretch>
       <verstretch>0</verstretch>
      </sizepolicy>
     </property>
     <property name="iconSize">
      <size>
       <width>24</width>
       <height>24</height>
      </size>
     </property>
     <property name="resizeMode">
      <enum>QListView::Adjust</enum>
     </property>
     <property name="layoutMode">
      <enum>QListView::Batched</enum>
     </property>
     <property name="uniformItemSizes">
      <bool>true</bool>
     </property>
    </widget>
   </item>
   <item row="1" column="0" colspan="3">
    <layout class="QHBoxLayout" name="horizontalLayout">
     <item>
      <widget class="QDialogButtonBox" name="pageButtonBox">
       <property name="orientation">
        <enum>Qt::Horizontal</enum>
       </property>
      </widget>
     </item>
     <item>
      <spacer>
       <property name="orientation">
        <enum>Qt::Horizontal</enum>
       </property>
       <property name="sizeHint" stdset="0">
        <size>
         <width>474</width>
         <height>22</height>
        </size>
       </property>
      </spacer>
     </item>
     <item>
      <widget class="QDialogButtonBox" name="dialogButtonBox">
       <property name="orientation">
        <enum>Qt::Horizontal</enum>
       </property>
       <property name="standardButtons">
        <set>QDialogButtonBox::Apply|QDialogButtonBox::Cancel|QDialogButtonBox::Ok</set>
       </property>
      </widget>
     </item>
    </layout>
   </item>
   <item row="0" column="1" rowspan="1">
    <widget class="QStackedWidget" name="qswPages">
     <property name="sizePolicy">
      <sizepolicy hsizetype="Expanding" vsizetype="Expanding">
       <horstretch>1</horstretch>
       <verstretch>0</verstretch>
      </sizepolicy>
     </property>
    </widget>
   </item>
  </layout>
 </widget>
 <resources>
  <include location="mumble.qrc"/>
 </resources>
 <connections>
  <connection>
   <sender>dialogButtonBox</sender>
   <signal>accepted()</signal>
   <receiver>ConfigDialog</receiver>
   <slot>accept()</slot>
   <hints>
    <hint type="sourcelabel">
     <x>167</x>
     <y>344</y>
    </hint>
    <hint type="destinationlabel">
     <x>191</x>
     <y>319</y>
    </hint>
   </hints>
  </connection>
  <connection>
   <sender>dialogButtonBox</sender>
   <signal>rejected()</signal>
   <receiver>ConfigDialog</receiver>
   <slot>reject()</slot>
   <hints>
    <hint type="sourcelabel">
     <x>260</x>
     <y>356</y>
    </hint>
    <hint type="destinationlabel">
     <x>284</x>
     <y>319</y>
    </hint>
   </hints>
  </connection>
 </connections>
</ui>
