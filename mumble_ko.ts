<?xml version="1.0" encoding="UTF-8"?>
<ui version="4.0">
 <class>LCDConfig</class>
 <widget class="QWidget" name="LCDConfig">
  <property name="geometry">
   <rect>
    <x>0</x>
    <y>0</y>
    <width>426</width>
    <height>694</height>
   </rect>
  </property>
  <property name="windowTitle">
   <string>LCD</string>
  </property>
  <layout class="QVBoxLayout" name="verticalLayout_2">
   <item>
    <widget class="QGroupBox" name="qgbDevices">
     <property name="minimumSize">
      <size>
       <width>160</width>
       <height>43</height>
      </size>
     </property>
     <property name="whatsThis">
      <string>&lt;p&gt;This is the list of available LCD devices on your system.  It lists devices by name, but also includes the size of the display. Mumble supports outputting to several LCD devices at a time.&lt;/p&gt;
&lt;h3&gt;Size:&lt;/h3&gt;
&lt;p&gt;
This field describes the size of an LCD device. The size is given either in pixels (for Graphic LCDs) or in characters (for Character LCDs).&lt;/p&gt;
&lt;h3&gt;Enabled:&lt;/h3&gt;
&lt;p&gt;This decides whether Mumble should draw to a particular LCD device.&lt;/p&gt;</string>
     </property>
     <property name="title">
      <string>Devices</string>
     </property>
     <layout class="QVBoxLayout" name="verticalLayout">
      <item>
       <widget class="QTreeWidget" name="qtwDevices">
        <property name="sizePolicy">
         <sizepolicy hsizetype="Expanding" vsizetype="Minimum">
          <horstretch>0</horstretch>
          <verstretch>0</verstretch>
         </sizepolicy>
        </property>
        <property name="itemsExpandable">
         <bool>false</bool>
        </property>
        <column>
         <property name="text">
          <string>Name</string>
         </property>
        </column>
        <column>
         <property name="text">
          <string>Size</string>
         </property>
        </column>
        <column>
         <property name="text">
          <string>Enabled</string>
         </property>
        </column>
       </widget>
      </item>
     </layout>
    </widget>
   </item>
   <item>
    <widget class="QGroupBox" name="qgbViews">
     <property name="sizePolicy">
      <sizepolicy hsizetype="Preferred" vsizetype="Minimum">
       <horstretch>0</horstretch>
       <verstretch>0</verstretch>
      </sizepolicy>
     </property>
     <property name="title">
      <string>Views</string>
     </property>
     <layout class="QGridLayout" name="gridLayout">
      <item row="0" column="0">
       <widget class="QLabel" name="qliMinColWidth">
        <property name="text">
         <string>Minimum Column Width</string>
        </property>
       </widget>
      </item>
      <item row="0" column="1">
       <widget class="QSlider" name="qsMinColWidth">
        <property name="whatsThis">
         <string>&lt;p&gt;This option decides the minimum width a column in the User View.&lt;/p&gt;
&lt;p&gt;If too many people are speaking at once, the User View will split itself into columns. You can use this option to pick a compromise between number of users shown on the LCD, and width of user names.&lt;/p&gt;
</string>
        </property>
        <property name="minimum">
         <number>40</number>
        </property>
        <property name="maximum">
         <number>200</number>
        </property>
        <property name="orientation">
         <enum>Qt::Horizontal</enum>
        </property>
       </widget>
      </item>
      <item row="0" column="2">
       <widget class="QLabel" name="qlMinColWidth">
        <property name="minimumSize">
         <size>
          <width>30</width>
          <height>0</height>
         </size>
        </property>
        <property name="text">
         <string/>
        </property>
       </widget>
      </item>
      <item row="1" column="0">
       <widget class="QLabel" name="qliSplitterWidth">
        <property name="text">
         <string>Splitter Width</string>
        </property>
       </widget>
      </item>
      <item row="1" column="1">
       <widget class="QSlider" name="qsSplitterWidth">
        <property name="whatsThis">
         <string>This setting decides the width of column splitter.</string>
        </property>
        <property name="minimum">
         <number>0</number>
        </property>
        <property name="maximum">
         <number>5</number>
        </property>
        <property name="orientation">
         <enum>Qt::Horizontal</enum>
        </property>
       </widget>
      </item>
      <item row="1" column="2">
       <widget class="QLabel" name="qlSplitterWidth">
        <property name="minimumSize">
         <size>
          <width>30</width>
          <height>0</height>
         </size>
        </property>
        <property name="text">
         <string/>
        </property>
       </widget>
      </item>
     </layout>
    </widget>
   </item>
   <item>
    <spacer name="verticalSpacer">
     <property name="orientation">
      <enum>Qt::Vertical</enum>
     </property>
     <property name="sizeType">
      <enum>QSizePolicy::Expanding</enum>
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
 <resources/>
 <connections/>
</ui>
