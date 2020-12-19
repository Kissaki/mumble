<?xml version="1.0" encoding="UTF-8"?>
<ui version="4.0">
 <class>AudioWizard</class>
 <widget class="QWizard" name="AudioWizard">
  <property name="geometry">
   <rect>
    <x>0</x>
    <y>0</y>
    <width>757</width>
    <height>823</height>
   </rect>
  </property>
  <property name="windowTitle">
   <string>Audio Tuning Wizard</string>
  </property>
  <property name="wizardStyle">
   <enum>QWizard::ClassicStyle</enum>
  </property>
  <widget class="CompletablePage" name="qwpIntro">
   <property name="title">
    <string>Introduction</string>
   </property>
   <property name="subTitle">
    <string>Welcome to the Mumble Audio Wizard</string>
   </property>
   <layout class="QVBoxLayout" name="verticalLayout">
    <item>
     <widget class="QLabel" name="label">
      <property name="text">
       <string>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;This is the audio tuning wizard for Mumble. This will help you correctly set the input levels of your sound card, and also set the correct parameters for sound processing in Mumble. &lt;/p&gt;&lt;p&gt;Please be aware that as long as this wizard is active, audio will be looped locally to allow you to listen to it, and no audio will be sent to the server. &lt;/p&gt;&lt;p&gt;Note that you can cancel this wizard at any time without it having an effect on your current audio systems. The settings are only once this wizard has been completed.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</string>
      </property>
      <property name="wordWrap">
       <bool>true</bool>
      </property>
      <property name="textInteractionFlags">
       <set>Qt::LinksAccessibleByMouse|Qt::TextSelectableByMouse</set>
      </property>
     </widget>
    </item>
    <item>
     <spacer name="verticalSpacer_3">
      <property name="orientation">
       <enum>Qt::Vertical</enum>
      </property>
      <property name="sizeHint" stdset="0">
       <size>
        <width>20</width>
        <height>291</height>
       </size>
      </property>
     </spacer>
    </item>
   </layout>
  </widget>
  <widget class="CompletablePage" name="qwpDevice">
   <property name="title">
    <string>Device selection</string>
   </property>
   <property name="subTitle">
    <string>Selecting the input and output device to use with Mumble.</string>
   </property>
   <layout class="QVBoxLayout" name="verticalLayout_2">
    <item>
     <widget class="QGroupBox" name="qgbInput">
      <property name="title">
       <string>Input Device</string>
      </property>
      <layout class="QGridLayout" name="gridLayout_2">
       <item row="0" column="0" colspan="2">
        <widget class="QLabel" name="qliInputText">
         <property name="text">
          <string>This is the device your microphone is connected to.</string>
         </property>
         <property name="wordWrap">
          <bool>true</bool>
         </property>
        </widget>
       </item>
       <item row="1" column="0">
        <widget class="QLabel" name="qliInput">
         <property name="text">
          <string>System</string>
         </property>
         <property name="buddy">
          <cstring>qcbInput</cstring>
         </property>
        </widget>
       </item>
       <item row="1" column="1">
        <widget class="MUComboBox" name="qcbInput">
         <property name="toolTip">
          <string>Input method for audio</string>
         </property>
         <property name="whatsThis">
          <string>&lt;b&gt;This is the input method to use for audio.&lt;/b&gt;</string>
         </property>
        </widget>
       </item>
       <item row="2" column="0">
        <widget class="QLabel" name="qliInputDevice">
         <property name="text">
          <string>Device</string>
         </property>
         <property name="buddy">
          <cstring>qcbInputDevice</cstring>
         </property>
        </widget>
       </item>
       <item row="2" column="1">
        <widget class="MUComboBox" name="qcbInputDevice">
         <property name="toolTip">
          <string>Input device to use</string>
         </property>
         <property name="whatsThis">
          <string>&lt;b&gt;Selects which sound card to use for audio input.&lt;/b&gt;</string>
         </property>
        </widget>
       </item>
       <item row="3" column="1">
        <widget class="QCheckBox" name="qcbEcho">
         <property name="toolTip">
          <string>Cancel echo from headset or speakers</string>
         </property>
         <property name="whatsThis">
          <string>This enables echo cancellation of outgoing audio, which helps both on speakers and on headsets.</string>
         </property>
         <property name="text">
          <string>Use echo cancellation</string>
         </property>
        </widget>
       </item>
      </layout>
     </widget>
    </item>
    <item>
     <widget class="QGroupBox" name="qgbOutput">
      <property name="title">
       <string>Output Device</string>
      </property>
      <layout class="QGridLayout" name="gridLayout">
       <item row="0" column="0" colspan="2">
        <widget class="QLabel" name="qliOutputText">
         <property name="text">
          <string>This is the device your speakers or headphones are connected to.</string>
         </property>
         <property name="wordWrap">
          <bool>true</bool>
         </property>
        </widget>
       </item>
       <item row="1" column="0">
        <widget class="QLabel" name="qliOutput">
         <property name="text">
          <string>System</string>
         </property>
         <property name="buddy">
          <cstring>qcbOutput</cstring>
         </property>
        </widget>
       </item>
       <item row="1" column="1">
        <widget class="MUComboBox" name="qcbOutput">
         <property name="toolTip">
          <string>Output method for audio</string>
         </property>
         <property name="whatsThis">
          <string>&lt;b&gt;This is the Output method to use for audio.&lt;/b&gt;</string>
         </property>
        </widget>
       </item>
       <item row="2" column="0">
        <widget class="QLabel" name="qliOutputDevice">
         <property name="text">
          <string>Device</string>
         </property>
         <property name="buddy">
          <cstring>qcbOutputDevice</cstring>
         </property>
        </widget>
       </item>
       <item row="2" column="1">
        <widget class="MUComboBox" name="qcbOutputDevice">
         <property name="toolTip">
          <string>Output device to use</string>
         </property>
         <property name="whatsThis">
          <string>&lt;b&gt;Selects which sound card to use for audio Output.&lt;/b&gt;</string>
         </property>
        </widget>
       </item>
       <item row="3" column="1">
        <widget class="QCheckBox" name="qcbPositional">
         <property name="toolTip">
          <string>Allows positioning of sound</string>
         </property>
         <property name="whatsThis">
          <string>This allows Mumble to use positional audio to place voices.</string>
         </property>
         <property name="text">
          <string>Enable positional audio</string>
         </property>
        </widget>
       </item>
       <item row="4" column="1">
        <widget class="QCheckBox" name="qcbAttenuateOthers">
         <property name="toolTip">
          <string>Enables attenuation of other applications while users talk to you</string>
         </property>
         <property name="whatsThis">
          <string>Enables attenuation of other applications while users talk to you. This means that as soon someone starts to speak to you in Mumble, the sound of all other applications (like audio players) will get attenuated so you can hear them more clearly.</string>
         </property>
         <property name="text">
          <string>Attenuate applications while other users talk</string>
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
      <property name="sizeHint" stdset="0">
       <size>
        <width>20</width>
        <height>105</height>
       </size>
      </property>
     </spacer>
    </item>
   </layout>
  </widget>
  <widget class="CompletablePage" name="qwpDeviceTuning">
   <property name="title">
    <string>Device tuning</string>
   </property>
   <property name="subTitle">
    <string>Changing hardware output delays to their minimum value.</string>
   </property>
   <layout class="QGridLayout" name="gridLayout_3">
    <item row="0" column="0" colspan="3">
     <widget class="QLabel" name="qliDeviceTuningText">
      <property name="text">
       <string>&lt;p&gt;
To keep latency to an absolute minimum, it's important to buffer as little audio as possible on the soundcard. However, many soundcards report that they require a much smaller buffer than what they can actually work with, so the only way to set this value is to try and fail.
&lt;/p&gt;
&lt;p&gt;
You should hear a voice sample. Change the slider below to the lowest value which gives &lt;b&gt;no&lt;/b&gt; interruptions or jitter in the sound. Please note that local echo is disabled during this test.
&lt;/p&gt;
</string>
      </property>
      <property name="wordWrap">
       <bool>true</bool>
      </property>
      <property name="textInteractionFlags">
       <set>Qt::LinksAccessibleByMouse|Qt::TextSelectableByMouse</set>
      </property>
     </widget>
    </item>
    <item row="1" column="0">
     <widget class="QSlider" name="qsOutputDelay">
      <property name="sizePolicy">
       <sizepolicy hsizetype="Expanding" vsizetype="Fixed">
        <horstretch>1</horstretch>
        <verstretch>0</verstretch>
       </sizepolicy>
      </property>
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
       <number>6</number>
      </property>
      <property name="pageStep">
       <number>2</number>
      </property>
      <property name="orientation">
       <enum>Qt::Horizontal</enum>
      </property>
     </widget>
    </item>
    <item row="1" column="1">
     <widget class="QLabel" name="qlOutputDelay">
      <property name="minimumSize">
       <size>
        <width>30</width>
        <height>0</height>
       </size>
      </property>
      <property name="text">
       <string/>
      </property>
      <property name="buddy">
       <cstring>qsOutputDelay</cstring>
      </property>
     </widget>
    </item>
    <item row="2" column="0" colspan="2">
     <spacer name="verticalSpacer_2">
      <property name="orientation">
       <enum>Qt::Vertical</enum>
      </property>
      <property name="sizeHint" stdset="0">
       <size>
        <width>20</width>
        <height>431</height>
       </size>
      </property>
     </spacer>
    </item>
   </layout>
  </widget>
  <widget class="CompletablePage" name="qwpVolume">
   <property name="title">
    <string>Volume tuning</string>
   </property>
   <property name="subTitle">
    <string>Tuning microphone hardware volume to optimal settings.</string>
   </property>
   <layout class="QVBoxLayout" name="verticalLayout_3">
    <item>
     <widget class="QLabel" name="qliVolumeTuningText">
      <property name="text">
       <string>&lt;p&gt;
Open your sound control panel and go to the recording settings. Make sure the microphone is selected as active input with maximum recording volume. If there's an option to enable a &quot;Microphone boost&quot; make sure it's checked.
&lt;/p&gt;
&lt;p&gt;
Speak loudly, as when you are annoyed or excited. Decrease the volume in the sound control panel until the bar below stays as high as possible in the blue and green but &lt;b&gt;not&lt;/b&gt; the red zone while you speak.
&lt;/p&gt;
</string>
      </property>
      <property name="wordWrap">
       <bool>true</bool>
      </property>
      <property name="textInteractionFlags">
       <set>Qt::LinksAccessibleByMouse|Qt::TextSelectableByMouse</set>
      </property>
     </widget>
    </item>
    <item>
     <widget class="QLabel" name="qliVolumeTuningTextHC">
      <property name="text">
       <string comment="For high contrast mode">&lt;p&gt;
Open your sound control panel and go to the recording settings. Make sure the microphone is selected as active input with maximum recording volume. If there's an option to enable a &quot;Microphone boost&quot; make sure it's checked.
&lt;/p&gt;
&lt;p&gt;
Speak loudly, as when you are annoyed or excited. Decrease the volume in the sound control panel until the bar below stays as high as possible in the striped and the empty but &lt;b&gt;not&lt;/b&gt; the crisscrossed zone while you speak.
&lt;/p&gt;
</string>
      </property>
      <property name="wordWrap">
       <bool>true</bool>
      </property>
      <property name="textInteractionFlags">
       <set>Qt::LinksAccessibleByMouse|Qt::TextSelectableByMouse</set>
      </property>
     </widget>
    </item>
    <item>
     <widget class="AudioBar" name="abAmplify" native="true">
      <property name="minimumSize">
       <size>
        <width>0</width>
        <height>30</height>
       </size>
      </property>
     </widget>
    </item>
    <item>
     <widget class="QLabel" name="qliAmpTuningText">
      <property name="text">
       <string>Now talk softly, as you would when talking late at night and you don't want to disturb anyone. Adjust the slider below so that the bar moves into green when you talk, but stays blue while you're silent.</string>
      </property>
      <property name="wordWrap">
       <bool>true</bool>
      </property>
      <property name="textInteractionFlags">
       <set>Qt::LinksAccessibleByMouse|Qt::TextSelectableByMouse</set>
      </property>
     </widget>
    </item>
    <item>
     <widget class="QLabel" name="qliAmpTuningTextHC">
      <property name="enabled">
       <bool>true</bool>
      </property>
      <property name="text">
       <string comment="For high contrast mode">Now talk softly, as you would when talking late at night and you don't want to disturb anyone. Adjust the slider below so that the bar moves into empty zone when you talk, but stays in the striped one while you're silent.</string>
      </property>
      <property name="wordWrap">
       <bool>true</bool>
      </property>
      <property name="textInteractionFlags">
       <set>Qt::LinksAccessibleByMouse|Qt::TextSelectableByMouse</set>
      </property>
     </widget>
    </item>
    <item>
     <widget class="QSlider" name="qsMaxAmp">
      <property name="maximum">
       <number>32767</number>
      </property>
      <property name="singleStep">
       <number>100</number>
      </property>
      <property name="pageStep">
       <number>1000</number>
      </property>
      <property name="orientation">
       <enum>Qt::Horizontal</enum>
      </property>
     </widget>
    </item>
    <item>
     <spacer name="verticalSpacer_4">
      <property name="orientation">
       <enum>Qt::Vertical</enum>
      </property>
      <property name="sizeHint" stdset="0">
       <size>
        <width>20</width>
        <height>552</height>
       </size>
      </property>
     </spacer>
    </item>
    <item>
     <layout class="QHBoxLayout" name="horizontalLayout_2">
      <item>
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
      <item>
       <widget class="QCheckBox" name="qcbHighContrast">
        <property name="toolTip">
         <string>Apply some high contrast optimizations for visually impaired users</string>
        </property>
        <property name="text">
         <string>Use high contrast graphics</string>
        </property>
       </widget>
      </item>
     </layout>
    </item>
   </layout>
  </widget>
  <widget class="CompletablePage" name="qwpTrigger">
   <property name="title">
    <string>Voice Activity Detection</string>
   </property>
   <property name="subTitle">
    <string>Letting Mumble figure out when you're talking and when you're silent.</string>
   </property>
   <layout class="QGridLayout" name="gridLayout_4">
    <item row="0" column="0" colspan="2">
     <widget class="QLabel" name="qliVADText">
      <property name="text">
       <string>This will help Mumble figure out when you are talking. The first step is selecting which data value to use.</string>
      </property>
      <property name="wordWrap">
       <bool>true</bool>
      </property>
      <property name="textInteractionFlags">
       <set>Qt::LinksAccessibleByMouse|Qt::TextSelectableByMouse</set>
      </property>
     </widget>
    </item>
    <item row="1" column="0">
     <layout class="QHBoxLayout" name="horizontalLayout">
      <item>
       <widget class="QRadioButton" name="qrPTT">
        <property name="text">
         <string>Push To Talk:</string>
        </property>
       </widget>
      </item>
      <item>
       <widget class="ShortcutKeyWidget" name="skwPTT"/>
      </item>
     </layout>
    </item>
    <item row="1" column="1" rowspan="4">
     <widget class="QLabel" name="qlTalkIcon">
      <property name="minimumSize">
       <size>
        <width>64</width>
        <height>64</height>
       </size>
      </property>
      <property name="text">
       <string/>
      </property>
     </widget>
    </item>
    <item row="3" column="0">
     <widget class="QRadioButton" name="qrSNR">
      <property name="text">
       <string>Signal-To-Noise ratio</string>
      </property>
     </widget>
    </item>
    <item row="5" column="0" colspan="2">
     <widget class="QWidget" name="qwVAD" native="true">
      <layout class="QVBoxLayout" name="verticalLayout_6">
       <property name="leftMargin">
        <number>0</number>
       </property>
       <property name="topMargin">
        <number>0</number>
       </property>
       <property name="rightMargin">
        <number>0</number>
       </property>
       <property name="bottomMargin">
        <number>0</number>
       </property>
       <item>
        <widget class="AudioBar" name="abVAD" native="true">
         <property name="minimumSize">
          <size>
           <width>0</width>
           <height>30</height>
          </size>
         </property>
        </widget>
       </item>
       <item>
        <widget class="QLabel" name="qliVadTuningText">
         <property name="text">
          <string>Next you need to adjust the following slider. The first few utterances you say should end up in the green area (definitive speech). While talking, you should stay inside the yellow (might be speech) and when you're not talking, everything should be in the red (definitively not speech).</string>
         </property>
         <property name="wordWrap">
          <bool>true</bool>
         </property>
         <property name="textInteractionFlags">
          <set>Qt::LinksAccessibleByMouse|Qt::TextSelectableByMouse</set>
         </property>
        </widget>
       </item>
       <item>
        <widget class="QLabel" name="qliVadTuningTextHC">
         <property name="text">
          <string comment="For high contrast mode">Next you need to adjust the following slider. The first few utterances you say should end up in the empty area (definitive speech). While talking, you should stay inside the striped (might be speech) and when you're not talking, everything should be in the crisscrossed (definitively not speech).</string>
         </property>
         <property name="wordWrap">
          <bool>true</bool>
         </property>
         <property name="textInteractionFlags">
          <set>Qt::LinksAccessibleByMouse|Qt::TextSelectableByMouse</set>
         </property>
        </widget>
       </item>
       <item>
        <widget class="QSlider" name="qsVAD">
         <property name="minimum">
          <number>1</number>
         </property>
         <property name="maximum">
          <number>32767</number>
         </property>
         <property name="singleStep">
          <number>100</number>
         </property>
         <property name="pageStep">
          <number>1000</number>
         </property>
         <property name="orientation">
          <enum>Qt::Horizontal</enum>
         </property>
        </widget>
       </item>
      </layout>
     </widget>
    </item>
    <item row="6" column="0">
     <spacer name="verticalSpacer_7">
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
     <widget class="QRadioButton" name="qrAmplitude">
      <property name="text">
       <string>Raw amplitude from input</string>
      </property>
     </widget>
    </item>
   </layout>
  </widget>
  <widget class="CompletablePage" name="qwpSettings">
   <property name="title">
    <string>Quality &amp; Notifications</string>
   </property>
   <property name="subTitle">
    <string>Adjust quality and notification settings.</string>
   </property>
   <layout class="QVBoxLayout" name="verticalLayout_9">
    <item>
     <widget class="QGroupBox" name="qgbQuality">
      <property name="sizePolicy">
       <sizepolicy hsizetype="Preferred" vsizetype="Preferred">
        <horstretch>0</horstretch>
        <verstretch>0</verstretch>
       </sizepolicy>
      </property>
      <property name="title">
       <string>Quality settings</string>
      </property>
      <layout class="QFormLayout" name="formLayout">
       <property name="fieldGrowthPolicy">
        <enum>QFormLayout::AllNonFixedFieldsGrow</enum>
       </property>
       <property name="labelAlignment">
        <set>Qt::AlignLeading|Qt::AlignLeft|Qt::AlignVCenter</set>
       </property>
       <item row="0" column="0">
        <widget class="QRadioButton" name="qrbQualityLow">
         <property name="sizePolicy">
          <sizepolicy hsizetype="Preferred" vsizetype="Fixed">
           <horstretch>0</horstretch>
           <verstretch>0</verstretch>
          </sizepolicy>
         </property>
         <property name="text">
          <string>Low</string>
         </property>
        </widget>
       </item>
       <item row="0" column="1">
        <widget class="QLabel" name="qlQualityLow">
         <property name="text">
          <string>In this configuration Mumble will use a &lt;b&gt;low amount of bandwidth&lt;/b&gt;. This will inevitably result in high latency and poor quality. Choose this only if your connection cannot handle the other settings. (16kbit/s, 60ms per packet)</string>
         </property>
         <property name="wordWrap">
          <bool>true</bool>
         </property>
         <property name="textInteractionFlags">
          <set>Qt::LinksAccessibleByMouse|Qt::TextSelectableByMouse</set>
         </property>
        </widget>
       </item>
       <item row="1" column="0">
        <widget class="QRadioButton" name="qrbQualityBalanced">
         <property name="sizePolicy">
          <sizepolicy hsizetype="Preferred" vsizetype="Fixed">
           <horstretch>0</horstretch>
           <verstretch>0</verstretch>
          </sizepolicy>
         </property>
         <property name="text">
          <string>Balanced</string>
         </property>
         <property name="checked">
          <bool>true</bool>
         </property>
        </widget>
       </item>
       <item row="1" column="1">
        <widget class="QLabel" name="qlQualityBalanced">
         <property name="text">
          <string>This is the &lt;b&gt;recommended default&lt;/b&gt; configuration. It provides a good balance between quality, latency, and bandwidth usage. (40kbit/s, 20ms per packet)</string>
         </property>
         <property name="wordWrap">
          <bool>true</bool>
         </property>
         <property name="textInteractionFlags">
          <set>Qt::LinksAccessibleByMouse|Qt::TextSelectableByMouse</set>
         </property>
        </widget>
       </item>
       <item row="2" column="0">
        <widget class="QRadioButton" name="qrbQualityUltra">
         <property name="sizePolicy">
          <sizepolicy hsizetype="Preferred" vsizetype="Fixed">
           <horstretch>0</horstretch>
           <verstretch>0</verstretch>
          </sizepolicy>
         </property>
         <property name="text">
          <string>High</string>
         </property>
        </widget>
       </item>
       <item row="2" column="1">
        <widget class="QLabel" name="qlQualityUltra">
         <property name="text">
          <string>This configuration is only recommended for use in setups where bandwidth is not an issue, like a LAN. It provides the lowest latency supported by Mumble and &lt;b&gt;high quality&lt;/b&gt;. (72kbit/s, 10ms per packet)</string>
         </property>
         <property name="wordWrap">
          <bool>true</bool>
         </property>
         <property name="textInteractionFlags">
          <set>Qt::LinksAccessibleByMouse|Qt::TextSelectableByMouse</set>
         </property>
        </widget>
       </item>
       <item row="3" column="0">
        <widget class="QRadioButton" name="qrbQualityCustom">
         <property name="text">
          <string>Custom</string>
         </property>
        </widget>
       </item>
       <item row="3" column="1">
        <widget class="QLabel" name="qlQualityCustom">
         <property name="text">
          <string>You already set a customized quality configuration in Mumble. Select this setting to keep it.</string>
         </property>
         <property name="textInteractionFlags">
          <set>Qt::LinksAccessibleByMouse|Qt::TextSelectableByMouse</set>
         </property>
        </widget>
       </item>
      </layout>
     </widget>
    </item>
    <item>
     <widget class="QGroupBox" name="qgbNotifications">
      <property name="title">
       <string>Notification settings</string>
      </property>
      <layout class="QVBoxLayout" name="verticalLayout_10">
       <item>
        <widget class="QRadioButton" name="qrbNotificationTTS">
         <property name="text">
          <string>Use Text-To-Speech to read notifications and messages to you.</string>
         </property>
         <property name="checked">
          <bool>true</bool>
         </property>
        </widget>
       </item>
       <item>
        <widget class="QRadioButton" name="qrbNotificationSounds">
         <property name="text">
          <string>Disable Text-To-Speech and use sounds instead.</string>
         </property>
        </widget>
       </item>
       <item>
        <widget class="QRadioButton" name="qrbNotificationCustom">
         <property name="text">
          <string>Keep custom Text-To-Speech settings.</string>
         </property>
        </widget>
       </item>
      </layout>
     </widget>
    </item>
    <item>
     <spacer name="verticalSpacer_8">
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
  <widget class="CompletablePage" name="qwpPositional">
   <property name="title">
    <string>Positional Audio</string>
   </property>
   <property name="subTitle">
    <string>Adjusting attenuation of positional audio.</string>
   </property>
   <layout class="QVBoxLayout" name="verticalLayout_5">
    <item>
     <widget class="QLabel" name="qliPositionalText">
      <property name="text">
       <string>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Mumble supports positional audio for some games, and will position the voice of other users relative to their position in game. Depending on their position, the volume of the voice will be changed between the speakers to simulate the direction and distance the other user is at. Such positioning depends on your speaker configuration being correct in your operating system, so a test is done here. &lt;/p&gt;&lt;p&gt;The graph below shows the position of &lt;span style=&quot; color:#56b4e9;&quot;&gt;you&lt;/span&gt;, the &lt;span style=&quot; color:#d55e00;&quot;&gt;speakers&lt;/span&gt; and a &lt;span style=&quot; color:#009e73;&quot;&gt;moving sound source&lt;/span&gt; as if seen from above. You should hear the audio move between the channels. &lt;/p&gt;&lt;p&gt;You can also use your mouse to position the &lt;span style=&quot; color:#009e73;&quot;&gt;sound source&lt;/span&gt; manually.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</string>
      </property>
      <property name="wordWrap">
       <bool>true</bool>
      </property>
      <property name="textInteractionFlags">
       <set>Qt::LinksAccessibleByMouse|Qt::TextSelectableByMouse</set>
      </property>
     </widget>
    </item>
    <item>
     <widget class="QCheckBox" name="qcbHeadphone">
      <property name="toolTip">
       <string>Use headphones instead of speakers</string>
      </property>
      <property name="whatsThis">
       <string>This ignores the OS speaker configuration and configures the positioning for headphones instead.</string>
      </property>
      <property name="text">
       <string>Use headphones</string>
      </property>
     </widget>
    </item>
    <item>
     <widget class="QGraphicsView" name="qgvView"/>
    </item>
    <item>
     <spacer name="verticalSpacer_6">
      <property name="orientation">
       <enum>Qt::Vertical</enum>
      </property>
      <property name="sizeHint" stdset="0">
       <size>
        <width>20</width>
        <height>41</height>
       </size>
      </property>
     </spacer>
    </item>
   </layout>
  </widget>
  <widget class="CompletablePage" name="qwpDone">
   <property name="title">
    <string>Finished</string>
   </property>
   <property name="subTitle">
    <string>Enjoy using Mumble</string>
   </property>
   <layout class="QVBoxLayout" name="verticalLayout_4">
    <item>
     <widget class="QLabel" name="qlDone">
      <property name="text">
       <string>&lt;p&gt;
Congratulations. You should now be ready to enjoy a richer sound experience with Mumble.
&lt;/p&gt;
&lt;p&gt;
Mumble is under continuous development, and the development team wants to focus on the features that benefit the most users. To this end, Mumble supports submitting anonymous statistics about your configuration to the developers. These statistics are essential for future development, and also make sure the features you use aren't deprecated.
&lt;/p&gt;
</string>
      </property>
      <property name="wordWrap">
       <bool>true</bool>
      </property>
      <property name="textInteractionFlags">
       <set>Qt::LinksAccessibleByMouse|Qt::TextSelectableByMouse</set>
      </property>
     </widget>
    </item>
    <item>
     <widget class="QCheckBox" name="qcbUsage">
      <property name="text">
       <string>Submit anonymous statistics to the Mumble project</string>
      </property>
     </widget>
    </item>
    <item>
     <spacer name="verticalSpacer_5">
      <property name="orientation">
       <enum>Qt::Vertical</enum>
      </property>
      <property name="sizeHint" stdset="0">
       <size>
        <width>20</width>
        <height>267</height>
       </size>
      </property>
     </spacer>
    </item>
   </layout>
  </widget>
 </widget>
 <customwidgets>
  <customwidget>
   <class>AudioBar</class>
   <extends>QWidget</extends>
   <header>AudioStats.h</header>
   <container>1</container>
  </customwidget>
  <customwidget>
   <class>CompletablePage</class>
   <extends>QWizardPage</extends>
   <header>AudioWizard.h</header>
   <container>1</container>
  </customwidget>
  <customwidget>
   <class>ShortcutKeyWidget</class>
   <extends>QLineEdit</extends>
   <header>GlobalShortcut.h</header>
  </customwidget>
  <customwidget>
   <class>MUComboBox</class>
   <extends>QComboBox</extends>
   <header>widgets/MUComboBox.h</header>
  </customwidget>
 </customwidgets>
 <resources/>
 <connections/>
</ui>
