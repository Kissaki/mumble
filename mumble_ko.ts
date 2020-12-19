<?xml version="1.0" encoding="UTF-8"?>
<ui version="4.0">
 <class>AudioOutput</class>
 <widget class="QWidget" name="AudioOutput">
  <property name="geometry">
   <rect>
    <x>0</x>
    <y>0</y>
    <width>546</width>
    <height>775</height>
   </rect>
  </property>
  <property name="windowTitle">
   <string>Audio output</string>
  </property>
  <layout class="QVBoxLayout" name="verticalLayout">
   <item>
    <widget class="QGroupBox" name="qgbInterfaces">
     <property name="title">
      <string>Interface</string>
     </property>
     <layout class="QGridLayout" name="gridLayout_3">
      <item row="0" column="0">
       <widget class="QLabel" name="qliSystem">
        <property name="text">
         <string>System</string>
        </property>
        <property name="buddy">
         <cstring>qcbSystem</cstring>
        </property>
       </widget>
      </item>
      <item row="0" column="1">
       <widget class="MUComboBox" name="qcbSystem">
        <property name="sizePolicy">
         <sizepolicy hsizetype="MinimumExpanding" vsizetype="Fixed">
          <horstretch>0</horstretch>
          <verstretch>0</verstretch>
         </sizepolicy>
        </property>
        <property name="toolTip">
         <string>Output method for audio</string>
        </property>
        <property name="whatsThis">
         <string>&lt;b&gt;This is the output method to use for audio.&lt;/b&gt;</string>
        </property>
       </widget>
      </item>
      <item row="0" column="2">
       <spacer>
        <property name="orientation">
         <enum>Qt::Horizontal</enum>
        </property>
        <property name="sizeType">
         <enum>QSizePolicy::Maximum</enum>
        </property>
        <property name="sizeHint" stdset="0">
         <size>
          <width>24</width>
          <height>16</height>
         </size>
        </property>
       </spacer>
      </item>
      <item row="0" column="3">
       <widget class="QLabel" name="qliDevice">
        <property name="text">
         <string>Device</string>
        </property>
        <property name="buddy">
         <cstring>qcbDevice</cstring>
        </property>
       </widget>
      </item>
      <item row="0" column="4">
       <widget class="MUComboBox" name="qcbDevice">
        <property name="sizePolicy">
         <sizepolicy hsizetype="MinimumExpanding" vsizetype="Fixed">
          <horstretch>1</horstretch>
          <verstretch>0</verstretch>
         </sizepolicy>
        </property>
        <property name="toolTip">
         <string>Output device for audio</string>
        </property>
        <property name="whatsThis">
         <string>&lt;b&gt;This is the output device to use for audio.&lt;/b&gt;</string>
        </property>
        <property name="sizeAdjustPolicy">
         <enum>QComboBox::AdjustToContents</enum>
        </property>
        <property name="minimumContentsLength">
         <number>16</number>
        </property>
       </widget>
      </item>
      <item row="1" column="1">
       <widget class="QCheckBox" name="qcbExclusive">
        <property name="enabled">
         <bool>true</bool>
        </property>
        <property name="minimumSize">
         <size>
          <width>0</width>
          <height>27</height>
         </size>
        </property>
        <property name="toolTip">
         <string>Exclusive mode, not recommended.</string>
        </property>
        <property name="whatsThis">
         <string>&lt;b&gt;This opens the device in exclusive mode.&lt;/b&gt;&lt;br /&gt;No other application will be able to use the device.</string>
        </property>
        <property name="text">
         <string>Exclusive</string>
        </property>
       </widget>
      </item>
     </layout>
    </widget>
   </item>
   <item>
    <widget class="QGroupBox" name="qgbOutput">
     <property name="title">
      <string>Audio Output</string>
     </property>
     <layout class="QGridLayout" name="gridLayout">
      <item row="1" column="2">
       <widget class="QLabel" name="qlVolume">
        <property name="text">
         <string notr="true">vol</string>
        </property>
       </widget>
      </item>
      <item row="2" column="1">
       <widget class="QSlider" name="qsDelay">
        <property name="toolTip">
         <string>Amount of data to buffer</string>
        </property>
        <property name="whatsThis">
         <string>This sets the amount of data to pre-buffer in the output buffer. Experiment with different values and set it to the lowest which doesn't cause rapid jitter in the sound.</string>
        </property>
        <property name="minimum">
         <number>1</number>
        </property>
        <property name="maximum">
         <number>10</number>
        </property>
        <property name="pageStep">
         <number>3</number>
        </property>
        <property name="orientation">
         <enum>Qt::Horizontal</enum>
        </property>
       </widget>
      </item>
      <item row="0" column="2">
       <widget class="QLabel" name="qlJitter">
        <property name="minimumSize">
         <size>
          <width>40</width>
          <height>0</height>
         </size>
        </property>
        <property name="text">
         <string notr="true">jb</string>
        </property>
       </widget>
      </item>
      <item row="2" column="0">
       <widget class="QLabel" name="qliDelay">
        <property name="text">
         <string>Output Delay</string>
        </property>
        <property name="buddy">
         <cstring>qsDelay</cstring>
        </property>
       </widget>
      </item>
      <item row="1" column="1">
       <widget class="QSlider" name="qsVolume">
        <property name="toolTip">
         <string>Volume of incoming speech</string>
        </property>
        <property name="whatsThis">
         <string>&lt;b&gt;This adjusts the volume of incoming speech.&lt;/b&gt;&lt;br /&gt;Note that if you increase this beyond 100%, audio will be distorted.</string>
        </property>
        <property name="minimum">
         <number>0</number>
        </property>
        <property name="maximum">
         <number>200</number>
        </property>
        <property name="value">
         <number>100</number>
        </property>
        <property name="orientation">
         <enum>Qt::Horizontal</enum>
        </property>
       </widget>
      </item>
      <item row="1" column="0">
       <widget class="QLabel" name="qliVolume">
        <property name="text">
         <string>Volume</string>
        </property>
        <property name="buddy">
         <cstring>qsVolume</cstring>
        </property>
       </widget>
      </item>
      <item row="2" column="2">
       <widget class="QLabel" name="qlDelay">
        <property name="text">
         <string notr="true">od</string>
        </property>
       </widget>
      </item>
      <item row="0" column="1">
       <widget class="QSlider" name="qsJitter">
        <property name="toolTip">
         <string>Safety margin for jitter buffer</string>
        </property>
        <property name="whatsThis">
         <string>&lt;b&gt;This sets the minimum safety margin for the jitter buffer.&lt;/b&gt;&lt;br /&gt;All incoming audio is buffered, and the jitter buffer continually tries to push the buffer to the minimum sustainable by your network, so latency can be as low as possible. This sets the minimum buffer size to use. If the start of sentences you hear is very jittery, increase this value.</string>
        </property>
        <property name="minimum">
         <number>1</number>
        </property>
        <property name="maximum">
         <number>5</number>
        </property>
        <property name="pageStep">
         <number>2</number>
        </property>
        <property name="orientation">
         <enum>Qt::Horizontal</enum>
        </property>
       </widget>
      </item>
      <item row="0" column="0">
       <widget class="QLabel" name="qliJitter">
        <property name="text">
         <string>Default &amp;Jitter Buffer</string>
        </property>
        <property name="buddy">
         <cstring>qsJitter</cstring>
        </property>
       </widget>
      </item>
     </layout>
    </widget>
   </item>
   <item>
    <widget class="QGroupBox" name="qgbAttenuation">
     <property name="toolTip">
      <string/>
     </property>
     <property name="title">
      <string>Attenuation</string>
     </property>
     <layout class="QGridLayout" name="gridLayout_4">
      <item row="6" column="0" colspan="3">
       <widget class="QCheckBox" name="qcbOnlyAttenuateSameOutput">
        <property name="toolTip">
         <string>If checked, Mumble will only attenuate applications that are using the same output source as Mumble</string>
        </property>
        <property name="whatsThis">
         <string>&lt;b&gt;Attenuate only applications using the same output as Mumble&lt;/b&gt;&lt;br /&gt;If checked, applications that use a different output than Mumble will not be attenuated.</string>
        </property>
        <property name="text">
         <string>Only attenuate applications using the same output device</string>
        </property>
       </widget>
      </item>
      <item row="0" column="0" rowspan="3">
       <widget class="QLabel" name="qliOtherVolume">
        <property name="text">
         <string>Attenuate applications by...</string>
        </property>
        <property name="alignment">
         <set>Qt::AlignLeading|Qt::AlignLeft|Qt::AlignTop</set>
        </property>
        <property name="wordWrap">
         <bool>true</bool>
        </property>
        <property name="buddy">
         <cstring>qsOtherVolume</cstring>
        </property>
       </widget>
      </item>
      <item row="7" column="0" colspan="3">
       <widget class="QCheckBox" name="qcbAttenuateLoopbacks">
        <property name="toolTip">
         <string>If checked, PulseAudio loopback modules will be attenuated</string>
        </property>
        <property name="whatsThis">
         <string>&lt;b&gt;Attenuate PulseAudio loopback modules&lt;/b&gt;&lt;br /&gt;If loopback modules are linked to Mumble's output device/sink, they will also be attenuated.</string>
        </property>
        <property name="text">
         <string>Attenuate PulseAudio loopback modules</string>
        </property>
       </widget>
      </item>
      <item row="2" column="1">
       <layout class="QHBoxLayout" name="horizontalLayout_2">
        <item>
         <spacer name="horizontalSpacer">
          <property name="orientation">
           <enum>Qt::Horizontal</enum>
          </property>
          <property name="sizeType">
           <enum>QSizePolicy::Maximum</enum>
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
         <widget class="QCheckBox" name="qcbAttenuateOthers">
          <property name="toolTip">
           <string>If checked Mumble lowers the volume of other applications while other users talk</string>
          </property>
          <property name="whatsThis">
           <string>&lt;b&gt;Attenuate applications while other users talk&lt;/b&gt;&lt;br /&gt;Mumble supports decreasing the volume of other applications during incoming and/or outgoing speech. This makes mumble activate the feature while other users talk to you.</string>
          </property>
          <property name="text">
           <string>while other users talk</string>
          </property>
         </widget>
        </item>
        <item>
         <spacer name="horizontalSpacer_3">
          <property name="orientation">
           <enum>Qt::Horizontal</enum>
          </property>
          <property name="sizeType">
           <enum>QSizePolicy::Fixed</enum>
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
         <widget class="QCheckBox" name="qcbAttenuateOthersOnTalk">
          <property name="toolTip">
           <string>If checked Mumble lowers the volume of other applications while you talk</string>
          </property>
          <property name="whatsThis">
           <string>&lt;b&gt;Attenuate applications while you talk&lt;/b&gt;&lt;br /&gt;Mumble supports decreasing the volume of other applications during incoming and/or outgoing speech. This makes mumble activate the feature while you talk.</string>
          </property>
          <property name="text">
           <string>while you talk</string>
          </property>
         </widget>
        </item>
        <item>
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
       </layout>
      </item>
      <item row="0" column="1">
       <widget class="QSlider" name="qsOtherVolume">
        <property name="toolTip">
         <string>Attenuation of other applications during speech</string>
        </property>
        <property name="whatsThis">
         <string>&lt;b&gt;Attenuate volume of other applications during speech&lt;/b&gt;&lt;br /&gt;Mumble supports decreasing the volume of other applications during incoming and/or outgoing speech. This sets the attenuation of other applications if the feature is enabled.</string>
        </property>
        <property name="minimum">
         <number>0</number>
        </property>
        <property name="maximum">
         <number>100</number>
        </property>
        <property name="value">
         <number>0</number>
        </property>
        <property name="orientation">
         <enum>Qt::Horizontal</enum>
        </property>
       </widget>
      </item>
      <item row="0" column="2">
       <widget class="QLabel" name="qlOtherVolume">
        <property name="text">
         <string notr="true">at</string>
        </property>
       </widget>
      </item>
      <item row="5" column="0" colspan="3">
       <widget class="QCheckBox" name="qcbAttenuateUsersOnPrioritySpeak">
        <property name="toolTip">
         <string>If checked Mumble lowers the volume of other users while you talk if you have the &quot;Priority Speaker&quot; status.</string>
        </property>
        <property name="whatsThis">
         <string>&lt;b&gt;Attenuate other users while talking as Priority Speaker&lt;/b&gt;&lt;br /&gt;Mumble supports decreasing the volume of other users while you talk as the &lt;i&gt;Priority Speaker&lt;/i&gt; to avoid getting disturbed. Checking this checkbox will enable this feature.</string>
        </property>
        <property name="text">
         <string>Attenuate other users while talking as Priority Speaker</string>
        </property>
       </widget>
      </item>
     </layout>
    </widget>
   </item>
   <item>
    <widget class="QGroupBox" name="qgbPositionalAudio">
     <property name="enabled">
      <bool>true</bool>
     </property>
     <property name="title">
      <string>Positional Audio</string>
     </property>
     <layout class="QGridLayout" name="gridLayout_2">
      <item row="1" column="1">
       <widget class="QLabel" name="qliMinDistancce">
        <property name="text">
         <string>Minimum Distance</string>
        </property>
        <property name="buddy">
         <cstring>qsMinDistance</cstring>
        </property>
       </widget>
      </item>
      <item row="1" column="4">
       <widget class="QLabel" name="qlMinDistance">
        <property name="minimumSize">
         <size>
          <width>40</width>
          <height>0</height>
         </size>
        </property>
        <property name="whatsThis">
         <string>Checking this indicates that you don't have speakers connected, just headphones. This is important, as speakers are usually in front of you, while headphones are directly to your left/right.</string>
        </property>
       </widget>
      </item>
      <item row="4" column="1">
       <widget class="QLabel" name="qliMaxDistVolume">
        <property name="text">
         <string>Minimum Volume</string>
        </property>
        <property name="buddy">
         <cstring>qsMaxDistance</cstring>
        </property>
       </widget>
      </item>
      <item row="3" column="1">
       <widget class="QLabel" name="qliMaxDistancce">
        <property name="text">
         <string>Maximum Distance</string>
        </property>
        <property name="buddy">
         <cstring>qsMaxDistance</cstring>
        </property>
       </widget>
      </item>
      <item row="1" column="2">
       <widget class="QSlider" name="qsMinDistance">
        <property name="toolTip">
         <string>Minimum distance to user before sound volume decreases</string>
        </property>
        <property name="statusTip">
         <string/>
        </property>
        <property name="whatsThis">
         <string>This sets the minimum distance for sound calculations. The volume of other users' speech will not decrease until they are at least this far away from you.</string>
        </property>
        <property name="minimum">
         <number>10</number>
        </property>
        <property name="maximum">
         <number>200</number>
        </property>
        <property name="orientation">
         <enum>Qt::Horizontal</enum>
        </property>
       </widget>
      </item>
      <item row="0" column="1">
       <widget class="QCheckBox" name="qcbPositional">
        <property name="text">
         <string>Enable</string>
        </property>
       </widget>
      </item>
      <item row="2" column="2">
       <widget class="QSlider" name="qsBloom">
        <property name="toolTip">
         <string>Factor for sound volume increase</string>
        </property>
        <property name="whatsThis">
         <string>How much should sound volume increase for sources that are really close?</string>
        </property>
        <property name="minimum">
         <number>0</number>
        </property>
        <property name="maximum">
         <number>75</number>
        </property>
        <property name="orientation">
         <enum>Qt::Horizontal</enum>
        </property>
       </widget>
      </item>
      <item row="0" column="2">
       <widget class="QCheckBox" name="qcbHeadphones">
        <property name="toolTip">
         <string>The connected &quot;speakers&quot; are actually headphones</string>
        </property>
        <property name="whatsThis">
         <string>Checking this indicates that you don't have speakers connected, just headphones. This is important, as speakers are usually in front of you, while headphones are directly to your left/right.</string>
        </property>
        <property name="text">
         <string>Headphones</string>
        </property>
       </widget>
      </item>
      <item row="4" column="4">
       <widget class="QLabel" name="qlMaxDistVolume">
        <property name="minimumSize">
         <size>
          <width>40</width>
          <height>0</height>
         </size>
        </property>
        <property name="text">
         <string notr="true">mv</string>
        </property>
       </widget>
      </item>
      <item row="4" column="2">
       <widget class="QSlider" name="qsMaxDistVolume">
        <property name="toolTip">
         <string>Factor for sound volume decrease</string>
        </property>
        <property name="whatsThis">
         <string>What should the volume be at the maximum distance?</string>
        </property>
        <property name="maximum">
         <number>100</number>
        </property>
        <property name="orientation">
         <enum>Qt::Horizontal</enum>
        </property>
       </widget>
      </item>
      <item row="2" column="4">
       <widget class="QLabel" name="qlBloom">
        <property name="minimumSize">
         <size>
          <width>40</width>
          <height>0</height>
         </size>
        </property>
        <property name="text">
         <string notr="true">bl</string>
        </property>
       </widget>
      </item>
      <item row="3" column="4">
       <widget class="QLabel" name="qlMaxDistance">
        <property name="minimumSize">
         <size>
          <width>40</width>
          <height>0</height>
         </size>
        </property>
        <property name="text">
         <string notr="true">md</string>
        </property>
       </widget>
      </item>
      <item row="3" column="2">
       <widget class="QSlider" name="qsMaxDistance">
        <property name="toolTip">
         <string>Maximum distance, beyond which speech volume won't decrease</string>
        </property>
        <property name="whatsThis">
         <string>This sets the maximum distance for sound calculations. When farther away than this, other users' speech volume will not decrease any further.</string>
        </property>
        <property name="minimum">
         <number>10</number>
        </property>
        <property name="maximum">
         <number>1000</number>
        </property>
        <property name="orientation">
         <enum>Qt::Horizontal</enum>
        </property>
       </widget>
      </item>
      <item row="2" column="1">
       <widget class="QLabel" name="qliBloom">
        <property name="text">
         <string>Bloom</string>
        </property>
        <property name="buddy">
         <cstring>qsMaxDistVolume</cstring>
        </property>
       </widget>
      </item>
     </layout>
    </widget>
   </item>
   <item>
    <widget class="QGroupBox" name="qgbLoopback">
     <property name="title">
      <string>Loopback Test</string>
     </property>
     <layout class="QGridLayout">
      <item row="1" column="0">
       <widget class="QLabel" name="qliPacketDelay">
        <property name="text">
         <string>Delay Variance</string>
        </property>
        <property name="buddy">
         <cstring>qsPacketDelay</cstring>
        </property>
       </widget>
      </item>
      <item row="1" column="1">
       <widget class="QSlider" name="qsPacketDelay">
        <property name="toolTip">
         <string>Variance in packet latency</string>
        </property>
        <property name="whatsThis">
         <string>&lt;b&gt;This sets the packet latency variance for loopback testing.&lt;/b&gt;&lt;br /&gt;Most audio paths contain some variable latency. This allows you to set that variance for loopback mode testing. For example, if you set this to 15ms, this will emulate a network with 20-35ms ping latency or one with 80-95ms latency. Most domestic net connections have a variance of about 5ms.</string>
        </property>
        <property name="maximum">
         <number>100</number>
        </property>
        <property name="orientation">
         <enum>Qt::Horizontal</enum>
        </property>
       </widget>
      </item>
      <item row="1" column="2">
       <widget class="QLabel" name="qlPacketDelay">
        <property name="minimumSize">
         <size>
          <width>40</width>
          <height>0</height>
         </size>
        </property>
        <property name="text">
         <string notr="true">dv</string>
        </property>
       </widget>
      </item>
      <item row="2" column="0">
       <widget class="QLabel" name="qliPacketLoss">
        <property name="text">
         <string>Packet Loss</string>
        </property>
        <property name="buddy">
         <cstring>qsPacketLoss</cstring>
        </property>
       </widget>
      </item>
      <item row="2" column="1">
       <widget class="QSlider" name="qsPacketLoss">
        <property name="toolTip">
         <string>Packet loss for loopback mode</string>
        </property>
        <property name="whatsThis">
         <string>&lt;b&gt;This sets the packet loss for loopback mode.&lt;/b&gt;&lt;br /&gt;This will be the ratio of packets lost. Unless your outgoing bandwidth is peaked or there's something wrong with your network connection, this will be 0%</string>
        </property>
        <property name="maximum">
         <number>50</number>
        </property>
        <property name="singleStep">
         <number>5</number>
        </property>
        <property name="pageStep">
         <number>20</number>
        </property>
        <property name="orientation">
         <enum>Qt::Horizontal</enum>
        </property>
       </widget>
      </item>
      <item row="2" column="2">
       <widget class="QLabel" name="qlPacketLoss">
        <property name="minimumSize">
         <size>
          <width>40</width>
          <height>0</height>
         </size>
        </property>
        <property name="text">
         <string notr="true">pl</string>
        </property>
       </widget>
      </item>
      <item row="0" column="0">
       <widget class="QLabel" name="qliLoopback">
        <property name="text">
         <string>&amp;Loopback</string>
        </property>
        <property name="buddy">
         <cstring>qcbLoopback</cstring>
        </property>
       </widget>
      </item>
      <item row="0" column="1" colspan="2">
       <widget class="MUComboBox" name="qcbLoopback">
        <property name="toolTip">
         <string>Desired loopback mode</string>
        </property>
        <property name="whatsThis">
         <string>&lt;b&gt;This enables one of the loopback test modes.&lt;/b&gt;&lt;br /&gt;&lt;i&gt;None&lt;/i&gt; - Loopback disabled&lt;br /&gt;&lt;i&gt;Local&lt;/i&gt; - Emulate a local server.&lt;br /&gt;&lt;i&gt;Server&lt;/i&gt; - Request loopback from server.&lt;br /&gt;Please note than when loopback is enabled, no other users will hear your voice. This setting is not saved on application exit.</string>
        </property>
       </widget>
      </item>
     </layout>
    </widget>
   </item>
   <item>
    <spacer name="spacer">
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
 <tabstops>
  <tabstop>qcbSystem</tabstop>
  <tabstop>qcbDevice</tabstop>
  <tabstop>qsJitter</tabstop>
  <tabstop>qsVolume</tabstop>
  <tabstop>qsDelay</tabstop>
  <tabstop>qsMinDistance</tabstop>
  <tabstop>qsBloom</tabstop>
  <tabstop>qsMaxDistance</tabstop>
  <tabstop>qsMaxDistVolume</tabstop>
  <tabstop>qcbLoopback</tabstop>
  <tabstop>qsPacketDelay</tabstop>
  <tabstop>qsPacketLoss</tabstop>
 </tabstops>
 <resources/>
 <connections/>
</ui>
