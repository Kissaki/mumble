<?xml version="1.0" encoding="UTF-8"?>
<ui version="4.0">
 <class>AudioInput</class>
 <widget class="QWidget" name="AudioInput">
  <property name="geometry">
   <rect>
    <x>0</x>
    <y>0</y>
    <width>588</width>
    <height>940</height>
   </rect>
  </property>
  <property name="windowTitle">
   <string>Audio input</string>
  </property>
  <layout class="QVBoxLayout">
   <item>
    <widget class="QGroupBox" name="qgbInterfaces">
     <property name="title">
      <string>Interface</string>
     </property>
     <layout class="QGridLayout" name="gridLayout">
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
         <string>Input method for audio</string>
        </property>
        <property name="whatsThis">
         <string>&lt;b&gt;This is the input method to use for audio.&lt;/b&gt;</string>
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
         <string>Input device for audio</string>
        </property>
        <property name="whatsThis">
         <string>&lt;b&gt;This is the input device to use for audio.&lt;/b&gt;</string>
        </property>
        <property name="sizeAdjustPolicy">
         <enum>QComboBox::AdjustToContents</enum>
        </property>
        <property name="minimumContentsLength">
         <number>16</number>
        </property>
       </widget>
      </item>
      <item row="1" column="4">
       <widget class="QCheckBox" name="qcbExclusive">
        <property name="minimumSize">
         <size>
          <width>0</width>
          <height>27</height>
         </size>
        </property>
        <property name="toolTip">
         <string>Exclusive mode</string>
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
    <widget class="QGroupBox" name="qgbTransmission">
     <property name="sizePolicy">
      <sizepolicy hsizetype="Preferred" vsizetype="Minimum">
       <horstretch>0</horstretch>
       <verstretch>0</verstretch>
      </sizepolicy>
     </property>
     <property name="title">
      <string>Transmission</string>
     </property>
     <layout class="QGridLayout">
      <item row="0" column="0">
       <widget class="QLabel" name="qliTransmit">
        <property name="text">
         <string>&amp;Transmit</string>
        </property>
        <property name="buddy">
         <cstring>qcbTransmit</cstring>
        </property>
       </widget>
      </item>
      <item row="0" column="1" colspan="2">
       <widget class="MUComboBox" name="qcbTransmit">
        <property name="toolTip">
         <string>When to transmit your speech</string>
        </property>
        <property name="whatsThis">
         <string>&lt;b&gt;This sets when speech should be transmitted.&lt;/b&gt;&lt;br /&gt;&lt;i&gt;Continuous&lt;/i&gt; - All the time&lt;br /&gt;&lt;i&gt;Voice Activity&lt;/i&gt; - When you are speaking clearly.&lt;br /&gt;&lt;i&gt;Push To Talk&lt;/i&gt; - When you hold down the hotkey set under &lt;i&gt;Shortcuts&lt;/i&gt;.</string>
        </property>
       </widget>
      </item>
      <item row="1" column="0" colspan="3">
       <widget class="QStackedWidget" name="qswTransmit">
        <property name="sizePolicy">
         <sizepolicy hsizetype="Preferred" vsizetype="MinimumExpanding">
          <horstretch>0</horstretch>
          <verstretch>0</verstretch>
         </sizepolicy>
        </property>
        <property name="currentIndex">
         <number>1</number>
        </property>
        <widget class="QWidget" name="qwPTT">
         <layout class="QGridLayout" columnstretch="0,1,0,0">
          <item row="0" column="0">
           <widget class="QLabel" name="qliDoublePush">
            <property name="text">
             <string>DoublePush Time</string>
            </property>
            <property name="buddy">
             <cstring>qsDoublePush</cstring>
            </property>
           </widget>
          </item>
          <item row="0" column="3">
           <widget class="QLabel" name="qlDoublePush">
            <property name="sizePolicy">
             <sizepolicy hsizetype="Minimum" vsizetype="Preferred">
              <horstretch>0</horstretch>
              <verstretch>0</verstretch>
             </sizepolicy>
            </property>
            <property name="text">
             <string notr="true">TextLabel</string>
            </property>
           </widget>
          </item>
          <item row="2" column="1">
           <widget class="QCheckBox" name="qcbPushWindow">
            <property name="toolTip">
             <string>Displays an always on top window with a push to talk button in it</string>
            </property>
            <property name="text">
             <string>Display push to talk window</string>
            </property>
           </widget>
          </item>
          <item row="3" column="1">
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
          <item row="0" column="1" colspan="2">
           <widget class="QSlider" name="qsDoublePush">
            <property name="toolTip">
             <string>If you press the PTT key twice in this time it will get locked.</string>
            </property>
            <property name="whatsThis">
             <string>&lt;b&gt;DoublePush Time&lt;/b&gt;&lt;br /&gt;If you press the push-to-talk key twice during the configured interval of time it will be locked. Mumble will keep transmitting until you hit the key once more to unlock PTT again.</string>
            </property>
            <property name="maximum">
             <number>1000</number>
            </property>
            <property name="singleStep">
             <number>10</number>
            </property>
            <property name="pageStep">
             <number>100</number>
            </property>
            <property name="orientation">
             <enum>Qt::Horizontal</enum>
            </property>
           </widget>
          </item>
          <item row="1" column="0">
           <widget class="QLabel" name="qliPTTHold">
            <property name="text">
             <string>Hold Time</string>
            </property>
           </widget>
          </item>
          <item row="1" column="3">
           <widget class="QLabel" name="qlPTTHold">
            <property name="text">
             <string notr="true">TextLabel</string>
            </property>
           </widget>
          </item>
          <item row="1" column="1">
           <widget class="QSlider" name="qsPTTHold">
            <property name="toolTip">
             <string>Time the microphone stays open after the PTT key is released</string>
            </property>
            <property name="maximum">
             <number>5000</number>
            </property>
            <property name="singleStep">
             <number>10</number>
            </property>
            <property name="orientation">
             <enum>Qt::Horizontal</enum>
            </property>
           </widget>
          </item>
         </layout>
        </widget>
        <widget class="QWidget" name="qwVAD">
         <layout class="QGridLayout">
          <item row="1" column="2">
           <widget class="QLabel" name="qlTransmitHold">
            <property name="minimumSize">
             <size>
              <width>40</width>
              <height>0</height>
             </size>
            </property>
            <property name="text">
             <string/>
            </property>
           </widget>
          </item>
          <item row="3" column="0">
           <widget class="QLabel" name="qliTransmitMin">
            <property name="text">
             <string>Silence Below</string>
            </property>
           </widget>
          </item>
          <item row="1" column="1">
           <widget class="QSlider" name="qsTransmitHold">
            <property name="toolTip">
             <string>How long to keep transmitting after silence</string>
            </property>
            <property name="whatsThis">
             <string>&lt;b&gt;This selects how long after a perceived stop in speech transmission should continue.&lt;/b&gt;&lt;br /&gt;Set this higher if your voice breaks up when you speak (seen by a rapidly blinking voice icon next to your name).</string>
            </property>
            <property name="minimum">
             <number>20</number>
            </property>
            <property name="maximum">
             <number>250</number>
            </property>
            <property name="orientation">
             <enum>Qt::Horizontal</enum>
            </property>
           </widget>
          </item>
          <item row="2" column="1">
           <widget class="AudioBar" name="abSpeech" native="true">
            <property name="maximumSize">
             <size>
              <width>16777215</width>
              <height>10</height>
             </size>
            </property>
            <property name="toolTip">
             <string>Current speech detection chance</string>
            </property>
            <property name="whatsThis">
             <string>&lt;b&gt;This shows the current speech detection settings.&lt;/b&gt;&lt;br /&gt;You can change the settings from the Settings dialog or from the Audio Wizard.</string>
            </property>
           </widget>
          </item>
          <item row="1" column="0">
           <widget class="QLabel" name="qliTransmitHold">
            <property name="text">
             <string>Voice &amp;Hold</string>
            </property>
            <property name="buddy">
             <cstring>qsTransmitHold</cstring>
            </property>
           </widget>
          </item>
          <item row="0" column="0" colspan="3">
           <layout class="QHBoxLayout">
            <item>
             <widget class="QRadioButton" name="qrbAmplitude">
              <property name="toolTip">
               <string>Use Amplitude based speech detection</string>
              </property>
              <property name="whatsThis">
               <string>&lt;b&gt;This sets speech detection to use Amplitude.&lt;/b&gt;&lt;br /&gt;In this mode, the raw strength of the input signal is used to detect speech.</string>
              </property>
              <property name="text">
               <string>Amplitude</string>
              </property>
             </widget>
            </item>
            <item>
             <widget class="QRadioButton" name="qrbSNR">
              <property name="toolTip">
               <string>Use SNR based speech detection</string>
              </property>
              <property name="whatsThis">
               <string>&lt;b&gt;This sets speech detection to use Signal to Noise ratio.&lt;/b&gt;&lt;br /&gt;In this mode, the input is analyzed for something resembling a clear signal, and the clarity of that signal is used to trigger speech detection.</string>
              </property>
              <property name="text">
               <string>Signal to Noise</string>
              </property>
             </widget>
            </item>
           </layout>
          </item>
          <item row="4" column="0">
           <widget class="QLabel" name="qliTransmitMax">
            <property name="text">
             <string>Speech Above</string>
            </property>
           </widget>
          </item>
          <item row="3" column="1">
           <widget class="QSlider" name="qsTransmitMin">
            <property name="toolTip">
             <string>Signal values below this count as silence</string>
            </property>
            <property name="whatsThis">
             <string>&lt;b&gt;This sets the trigger values for voice detection.&lt;/b&gt;&lt;br /&gt;Use this together with the Audio Statistics window to manually tune the trigger values for detecting speech. Input values below &quot;Silence Below&quot; always count as silence. Values above &quot;Speech Above&quot; always count as voice. Values in between will count as voice if you're already talking, but will not trigger a new detection.</string>
            </property>
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
          <item row="4" column="1">
           <widget class="QSlider" name="qsTransmitMax">
            <property name="toolTip">
             <string>Signal values above this count as voice</string>
            </property>
            <property name="whatsThis">
             <string>&lt;b&gt;This sets the trigger values for voice detection.&lt;/b&gt;&lt;br /&gt;Use this together with the Audio Statistics window to manually tune the trigger values for detecting speech. Input values below &quot;Silence Below&quot; always count as silence. Values above &quot;Speech Above&quot; always count as voice. Values in between will count as voice if you're already talking, but will not trigger a new detection.</string>
            </property>
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
        <widget class="QWidget" name="qwContinuous"/>
       </widget>
      </item>
     </layout>
    </widget>
   </item>
   <item>
    <widget class="QGroupBox" name="qgbCompression">
     <property name="title">
      <string>Compression</string>
     </property>
     <layout class="QGridLayout">
      <item row="1" column="0">
       <widget class="QLabel" name="qliFrames">
        <property name="text">
         <string>Audio per packet</string>
        </property>
        <property name="buddy">
         <cstring>qsFrames</cstring>
        </property>
       </widget>
      </item>
      <item row="1" column="1">
       <widget class="QSlider" name="qsFrames">
        <property name="toolTip">
         <string>How many audio frames to send per packet</string>
        </property>
        <property name="whatsThis">
         <string>&lt;b&gt;This selects how many audio frames should be put in one packet.&lt;/b&gt;&lt;br /&gt;Increasing this will increase the latency of your voice, but will also reduce bandwidth requirements.</string>
        </property>
        <property name="minimum">
         <number>1</number>
        </property>
        <property name="maximum">
         <number>4</number>
        </property>
        <property name="pageStep">
         <number>2</number>
        </property>
        <property name="orientation">
         <enum>Qt::Horizontal</enum>
        </property>
       </widget>
      </item>
      <item row="0" column="2">
       <widget class="QLabel" name="qlQuality">
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
      <item row="1" column="2">
       <widget class="QLabel" name="qlFrames">
        <property name="minimumSize">
         <size>
          <width>40</width>
          <height>0</height>
         </size>
        </property>
        <property name="text">
         <string/>
        </property>
       </widget>
      </item>
      <item row="0" column="1">
       <widget class="QSlider" name="qsQuality">
        <property name="toolTip">
         <string>Quality of compression (peak bandwidth)</string>
        </property>
        <property name="whatsThis">
         <string>&lt;b&gt;This sets the quality of compression.&lt;/b&gt;&lt;br /&gt;This determines how much bandwidth Mumble is allowed to use for outgoing audio.</string>
        </property>
        <property name="minimum">
         <number>8000</number>
        </property>
        <property name="maximum">
         <number>192000</number>
        </property>
        <property name="singleStep">
         <number>1000</number>
        </property>
        <property name="pageStep">
         <number>5000</number>
        </property>
        <property name="value">
         <number>32000</number>
        </property>
        <property name="orientation">
         <enum>Qt::Horizontal</enum>
        </property>
       </widget>
      </item>
      <item row="3" column="0" colspan="3">
       <widget class="QLabel" name="qlBitrate">
        <property name="font">
         <font>
          <italic>true</italic>
         </font>
        </property>
        <property name="toolTip">
         <string>Maximum bandwidth used for sending audio</string>
        </property>
        <property name="whatsThis">
         <string>&lt;b&gt;This shows peak outgoing bandwidth used.&lt;/b&gt;&lt;br /&gt;This shows the peak amount of bandwidth sent out from your machine. Audio bitrate is the maximum bitrate (as we use VBR) for the audio data alone. Position is the bitrate used for positional information. Overhead is our framing and the IP packet headers (IP and UDP is 75% of this overhead).</string>
        </property>
        <property name="text">
         <string/>
        </property>
        <property name="alignment">
         <set>Qt::AlignCenter</set>
        </property>
       </widget>
      </item>
      <item row="0" column="0">
       <widget class="QLabel" name="qliQuality">
        <property name="text">
         <string>&amp;Quality</string>
        </property>
        <property name="buddy">
         <cstring>qsQuality</cstring>
        </property>
       </widget>
      </item>
      <item row="2" column="0" colspan="2">
       <widget class="QCheckBox" name="qcbAllowLowDelay">
        <property name="toolTip">
         <string>Enable Opus' low-delay mode when the quality is set to &lt;b&gt;64 kb/s&lt;/b&gt; or higher. </string>
        </property>
        <property name="whatsThis">
         <string>If checked, Mumble will enable Opus' low-delay mode when the quality is set to &lt;b&gt;64 kbit/s&lt;/b&gt; or higher. Low-delay mode decreases latency by &lt;b&gt;~15 milliseconds&lt;/b&gt; in the round trip. This mode may require an higher bitrate to preserve the same quality, in comparison with the music and VOIP modes.</string>
        </property>
        <property name="text">
         <string>Allow low delay mode</string>
        </property>
       </widget>
      </item>
     </layout>
    </widget>
   </item>
   <item>
    <widget class="QGroupBox" name="qgbAudio">
     <property name="title">
      <string>Audio Processing</string>
     </property>
     <layout class="QGridLayout">
      <item row="2" column="1">
       <widget class="QSlider" name="qsAmp">
        <property name="toolTip">
         <string>Maximum amplification of input sound</string>
        </property>
        <property name="whatsThis">
         <string>&lt;b&gt;Maximum amplification of input.&lt;/b&gt;&lt;br /&gt;Mumble normalizes the input volume before compressing, and this sets how much it's allowed to amplify.&lt;br /&gt;The actual level is continually updated based on your current speech pattern, but it will never go above the level specified here.&lt;br /&gt;If the &lt;i&gt;Microphone loudness&lt;/i&gt; level of the audio statistics hover around 100%, you probably want to set this to 2.0 or so, but if, like most people, you are unable to reach 100%, set this to something much higher.&lt;br /&gt;Ideally, set it so &lt;i&gt;Microphone Loudness * Amplification Factor &gt;= 100&lt;/i&gt;, even when you're speaking really soft.&lt;br /&gt;&lt;br /&gt;Note that there is no harm in setting this to maximum, but Mumble will start picking up other conversations if you leave it to auto-tune to that level.</string>
        </property>
        <property name="maximum">
         <number>19500</number>
        </property>
        <property name="singleStep">
         <number>500</number>
        </property>
        <property name="pageStep">
         <number>2000</number>
        </property>
        <property name="orientation">
         <enum>Qt::Horizontal</enum>
        </property>
       </widget>
      </item>
      <item row="2" column="0">
       <widget class="QLabel" name="qliAmp">
        <property name="text">
         <string>Max. Amplification</string>
        </property>
        <property name="buddy">
         <cstring>qsAmp</cstring>
        </property>
       </widget>
      </item>
      <item row="2" column="2">
       <widget class="QLabel" name="qlAmp">
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
      <item row="3" column="0">
       <widget class="QLabel" name="qliEcho">
        <property name="toolTip">
         <string/>
        </property>
        <property name="text">
         <string>Echo Cancellation</string>
        </property>
       </widget>
      </item>
      <item row="4" column="0" colspan="3">
       <widget class="QGroupBox" name="groupBox">
        <property name="title">
         <string>Noise suppression</string>
        </property>
        <layout class="QVBoxLayout" name="verticalLayout">
         <item>
          <layout class="QHBoxLayout" name="horizontalLayout_2">
           <item>
            <widget class="QRadioButton" name="qrbNoiseSupDeactivated">
             <property name="toolTip">
              <string>Don't use noise suppression.</string>
             </property>
             <property name="text">
              <string>Disabled</string>
             </property>
            </widget>
           </item>
           <item>
            <widget class="QRadioButton" name="qrbNoiseSupSpeex">
             <property name="toolTip">
              <string>Use the noise suppression algorithm provided by Speex.</string>
             </property>
             <property name="text">
              <string notr="true">Speex</string>
             </property>
            </widget>
           </item>
           <item>
            <widget class="QRadioButton" name="qrbNoiseSupRNNoise">
             <property name="toolTip">
              <string>Use the noise suppression algorithm provided by RNNoise.</string>
             </property>
             <property name="text">
              <string notr="true">RNNoise</string>
             </property>
            </widget>
           </item>
           <item>
            <widget class="QRadioButton" name="qrbNoiseSupBoth">
             <property name="toolTip">
              <string>Use a combination of Speex and RNNoise to do noise suppression.</string>
             </property>
             <property name="text">
              <string>Both</string>
             </property>
            </widget>
           </item>
          </layout>
         </item>
         <item>
          <layout class="QHBoxLayout" name="horizontalLayout_3">
           <item>
            <widget class="QLabel" name="qlSpeexNoiseSup">
             <property name="toolTip">
              <string>This controls the amount by which Speex will suppress noise.</string>
             </property>
             <property name="text">
              <string>Speex suppression strength</string>
             </property>
            </widget>
           </item>
           <item>
            <widget class="QSlider" name="qsSpeexNoiseSupStrength">
             <property name="toolTip">
              <string>This controls the amount by which Speex will suppress noise.</string>
             </property>
             <property name="whatsThis">
              <string>&lt;b&gt;This sets the amount of noise suppression to apply.&lt;/b&gt;&lt;br /&gt;The higher this value, the more aggressively stationary noise will be suppressed.</string>
             </property>
             <property name="minimum">
              <number>15</number>
             </property>
             <property name="maximum">
              <number>60</number>
             </property>
             <property name="pageStep">
              <number>5</number>
             </property>
             <property name="orientation">
              <enum>Qt::Horizontal</enum>
             </property>
            </widget>
           </item>
           <item>
            <widget class="QLabel" name="qlSpeexNoiseSupStrength">
             <property name="sizePolicy">
              <sizepolicy hsizetype="Fixed" vsizetype="Fixed">
               <horstretch>0</horstretch>
               <verstretch>0</verstretch>
              </sizepolicy>
             </property>
             <property name="minimumSize">
              <size>
               <width>30</width>
               <height>0</height>
              </size>
             </property>
             <property name="toolTip">
              <string>This controls the amount by which Speex will suppress noise.</string>
             </property>
             <property name="text">
              <string/>
             </property>
            </widget>
           </item>
          </layout>
         </item>
        </layout>
       </widget>
      </item>
      <item row="3" column="1" colspan="2">
       <widget class="MUComboBox" name="qcbEcho">
        <property name="toolTip">
         <string/>
        </property>
        <property name="whatsThis">
         <string>Enabling this will cancel the echo from your speakers. Mixed has low CPU impact, but only works well if your speakers are equally loud and equidistant from the microphone. Multichannel echo cancellation provides much better echo cancellation, but at a higher CPU cost.</string>
        </property>
        <item>
         <property name="text">
          <string>Disabled</string>
         </property>
        </item>
        <item>
         <property name="text">
          <string>Mixed echo cancellation</string>
         </property>
        </item>
        <item>
         <property name="text">
          <string>Multichannel echo cancellation</string>
         </property>
        </item>
       </widget>
      </item>
     </layout>
    </widget>
   </item>
   <item>
    <widget class="QGroupBox" name="qgbMisc">
     <property name="title">
      <string>Misc</string>
     </property>
     <layout class="QGridLayout" name="_2">
      <item row="2" column="5">
       <widget class="QPushButton" name="qpbPushClickBrowseOff">
        <property name="toolTip">
         <string>Browse for off audio file</string>
        </property>
        <property name="text">
         <string>B&amp;rowse...</string>
        </property>
       </widget>
      </item>
      <item row="2" column="3">
       <widget class="QLabel" name="qlPushClickOff">
        <property name="text">
         <string>Off</string>
        </property>
        <property name="alignment">
         <set>Qt::AlignRight|Qt::AlignTrailing|Qt::AlignVCenter</set>
        </property>
       </widget>
      </item>
      <item row="1" column="3">
       <widget class="QLabel" name="qlPushClickOn">
        <property name="text">
         <string>On</string>
        </property>
        <property name="alignment">
         <set>Qt::AlignRight|Qt::AlignTrailing|Qt::AlignVCenter</set>
        </property>
       </widget>
      </item>
      <item row="1" column="6">
       <widget class="QPushButton" name="qpbPushClickPreview">
        <property name="toolTip">
         <string>Preview the audio cues</string>
        </property>
        <property name="whatsThis">
         <string>&lt;b&gt;Preview&lt;/b&gt;&lt;br/&gt;Plays the current &lt;i&gt;on&lt;/i&gt; sound followed by the current &lt;i&gt;off&lt;/i&gt; sound.</string>
        </property>
        <property name="text">
         <string>&amp;Preview</string>
        </property>
       </widget>
      </item>
      <item row="2" column="6">
       <widget class="QPushButton" name="qpbPushClickReset">
        <property name="toolTip">
         <string>Reset audio cue to default</string>
        </property>
        <property name="whatsThis">
         <string>&lt;b&gt;Reset&lt;/b&gt;&lt;br/&gt;Reset the paths for the files to their default.</string>
        </property>
        <property name="text">
         <string>R&amp;eset</string>
        </property>
       </widget>
      </item>
      <item row="1" column="5">
       <widget class="QPushButton" name="qpbPushClickBrowseOn">
        <property name="toolTip">
         <string>Browse for on audio file</string>
        </property>
        <property name="text">
         <string>&amp;Browse...</string>
        </property>
       </widget>
      </item>
      <item row="1" column="4">
       <widget class="QLineEdit" name="qlePushClickPathOn">
        <property name="toolTip">
         <string>Gets played when starting to transmit</string>
        </property>
       </widget>
      </item>
      <item row="2" column="4">
       <widget class="QLineEdit" name="qlePushClickPathOff">
        <property name="toolTip">
         <string>Gets played when stopping to transmit</string>
        </property>
       </widget>
      </item>
      <item row="1" column="0">
       <widget class="QCheckBox" name="qcbPushClick">
        <property name="toolTip">
         <string>Audible audio cue when starting or stopping to transmit</string>
        </property>
        <property name="whatsThis">
         <string>&lt;b&gt;This enables transmission audio cues.&lt;/b&gt;&lt;br /&gt;Setting this will give you a short audio beep when you start and stop transmitting.</string>
        </property>
        <property name="text">
         <string>Audio cue</string>
        </property>
       </widget>
      </item>
      <item row="3" column="0" colspan="2">
       <widget class="QLabel" name="qliIdle">
        <property name="text">
         <string>Idle action</string>
        </property>
       </widget>
      </item>
      <item row="4" column="4">
       <widget class="QCheckBox" name="qcbUndoIdleAction">
        <property name="toolTip">
         <string>The idle action will be reversed upon any key or mouse button input</string>
        </property>
        <property name="text">
         <string>Undo Idle action upon activity</string>
        </property>
       </widget>
      </item>
      <item row="3" column="4">
       <layout class="QHBoxLayout" name="horizontalLayout">
        <item>
         <widget class="QSpinBox" name="qsbIdle">
          <property name="minimum">
           <number>1</number>
          </property>
          <property name="maximum">
           <number>5000</number>
          </property>
          <property name="value">
           <number>5</number>
          </property>
         </widget>
        </item>
        <item>
         <widget class="QLabel" name="qlIdle">
          <property name="minimumSize">
           <size>
            <width>30</width>
            <height>0</height>
           </size>
          </property>
          <property name="text">
           <string>minutes do</string>
          </property>
         </widget>
        </item>
        <item>
         <widget class="MUComboBox" name="qcbIdleAction">
          <item>
           <property name="text">
            <string>nothing</string>
           </property>
          </item>
          <item>
           <property name="text">
            <string>deafen</string>
           </property>
          </item>
          <item>
           <property name="text">
            <string>mute</string>
           </property>
          </item>
         </widget>
        </item>
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
       </layout>
      </item>
      <item row="3" column="3">
       <widget class="QLabel" name="qlIdle2">
        <property name="text">
         <string>after</string>
        </property>
       </widget>
      </item>
     </layout>
    </widget>
   </item>
   <item>
    <spacer>
     <property name="orientation">
      <enum>Qt::Vertical</enum>
     </property>
     <property name="sizeHint" stdset="0">
      <size>
       <width>1</width>
       <height>151</height>
      </size>
     </property>
    </spacer>
   </item>
  </layout>
 </widget>
 <customwidgets>
  <customwidget>
   <class>AudioBar</class>
   <extends>QWidget</extends>
   <header>AudioStats.h</header>
   <container>1</container>
  </customwidget>
  <customwidget>
   <class>MUComboBox</class>
   <extends>QComboBox</extends>
   <header>widgets/MUComboBox.h</header>
  </customwidget>
 </customwidgets>
 <tabstops>
  <tabstop>qcbSystem</tabstop>
  <tabstop>qcbDevice</tabstop>
  <tabstop>qcbTransmit</tabstop>
  <tabstop>qsDoublePush</tabstop>
  <tabstop>qrbSNR</tabstop>
  <tabstop>qsTransmitHold</tabstop>
  <tabstop>qsTransmitMin</tabstop>
  <tabstop>qsTransmitMax</tabstop>
  <tabstop>qsQuality</tabstop>
  <tabstop>qsFrames</tabstop>
  <tabstop>qsAmp</tabstop>
 </tabstops>
 <resources/>
 <connections/>
</ui>
