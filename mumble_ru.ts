<?xml version="1.0" encoding="UTF-8"?>
<ui version="4.0">
 <class>ACLEditor</class>
 <widget class="QDialog" name="ACLEditor">
  <property name="geometry">
   <rect>
    <x>0</x>
    <y>0</y>
    <width>881</width>
    <height>503</height>
   </rect>
  </property>
  <property name="windowTitle">
   <string>Dialog</string>
  </property>
  <layout class="QVBoxLayout">
   <item>
    <widget class="QTabWidget" name="qtwTab">
     <property name="currentIndex">
      <number>1</number>
     </property>
     <widget class="QWidget" name="qwChannel">
      <attribute name="title">
       <string>&amp;Properties</string>
      </attribute>
      <layout class="QFormLayout" name="formLayout">
       <property name="fieldGrowthPolicy">
        <enum>QFormLayout::AllNonFixedFieldsGrow</enum>
       </property>
       <item row="6" column="0">
        <widget class="QLabel" name="qlChannelPassword">
         <property name="text">
          <string>Password</string>
         </property>
        </widget>
       </item>
       <item row="6" column="1">
        <widget class="QLineEdit" name="qleChannelPassword">
         <property name="toolTip">
          <string>Enter the channel password here.</string>
         </property>
         <property name="whatsThis">
          <string>&lt;b&gt;Password&lt;/b&gt;&lt;br /&gt;This field allows you to easily set and change the password of a channel. It uses Mumble's access tokens feature in the background. Use ACLs and groups if you need more fine grained and powerful access control.</string>
         </property>
        </widget>
       </item>
       <item row="7" column="0">
        <widget class="QLabel" name="qlChannelPosition">
         <property name="text">
          <string>Position</string>
         </property>
        </widget>
       </item>
       <item row="7" column="1">
        <widget class="QSpinBox" name="qsbChannelPosition">
         <property name="maximumSize">
          <size>
           <width>16777215</width>
           <height>16777215</height>
          </size>
         </property>
         <property name="toolTip">
          <string>This is the sort order for the channel.</string>
         </property>
         <property name="whatsThis">
          <string>&lt;b&gt;Position&lt;/b&gt;&lt;br/&gt;
This value enables you to change the way Mumble arranges the channels in the tree. A channel with a higher &lt;i&gt;Position&lt;/i&gt; value will always be placed below one with a lower value and the other way around. If the &lt;i&gt;Position&lt;/i&gt; value of two channels is equal they will get sorted alphabetically by their name.</string>
         </property>
         <property name="maximum">
          <number>99</number>
         </property>
        </widget>
       </item>
       <item row="8" column="0">
        <widget class="QLabel" name="qlChannelMaxUsers">
         <property name="text">
          <string>Maximum Users</string>
         </property>
        </widget>
       </item>
       <item row="8" column="1">
        <widget class="QSpinBox" name="qsbChannelMaxUsers">
         <property name="maximumSize">
          <size>
           <width>16777215</width>
           <height>16777215</height>
          </size>
         </property>
         <property name="toolTip">
          <string>Maximum number of users allowed in the channel</string>
         </property>
         <property name="whatsThis">
          <string>&lt;b&gt;Maximum Users&lt;/b&gt;&lt;br /&gt;
This value allows you to set the maximum number of users allowed in the channel. If the value is above zero, only that number of users will be allowed to enter the channel. If the value is zero, the maximum number of users in the channel is given by the server's default limit.</string>
         </property>
        </widget>
       </item>
       <item row="10" column="1">
        <widget class="QCheckBox" name="qcbChannelTemporary">
         <property name="toolTip">
          <string>Check to create a temporary channel.</string>
         </property>
         <property name="whatsThis">
          <string>&lt;b&gt;Temporary&lt;/b&gt;&lt;br /&gt;
When checked the channel created will be marked as temporary. This means when the last player leaves it the channel will be automatically deleted by the server.</string>
         </property>
         <property name="text">
          <string>Temporary</string>
         </property>
        </widget>
       </item>
       <item row="3" column="1">
        <layout class="QHBoxLayout" name="qwChannelProperties">
         <item>
          <widget class="QLineEdit" name="qleChannelName">
           <property name="toolTip">
            <string>Enter the channel name here.</string>
           </property>
           <property name="whatsThis">
            <string>&lt;b&gt;Name&lt;/b&gt;&lt;br /&gt;Enter the channel name in this field. The name has to comply with the restriction imposed by the server you are connected to.</string>
           </property>
          </widget>
         </item>
         <item>
          <widget class="QLabel" name="qlChannelID">
           <property name="toolTip">
            <string>ID of the channel.</string>
           </property>
           <property name="text">
            <string notr="true">ChannelID</string>
           </property>
          </widget>
         </item>
        </layout>
       </item>
       <item row="3" column="0">
        <widget class="QLabel" name="qlChannelName">
         <property name="text">
          <string>Name</string>
         </property>
        </widget>
       </item>
       <item row="4" column="1">
        <widget class="RichTextEditor" name="rteChannelDescription" native="true">
         <property name="sizePolicy">
          <sizepolicy hsizetype="Preferred" vsizetype="Preferred">
           <horstretch>0</horstretch>
           <verstretch>1</verstretch>
          </sizepolicy>
         </property>
        </widget>
       </item>
       <item row="4" column="0">
        <widget class="QLabel" name="qlChannelDescription">
         <property name="text">
          <string>Description</string>
         </property>
        </widget>
       </item>
      </layout>
     </widget>
     <widget class="QWidget" name="qwGroups">
      <attribute name="title">
       <string>&amp;Groups</string>
      </attribute>
      <layout class="QVBoxLayout">
       <item>
        <widget class="QGroupBox" name="qgbGroups">
         <property name="title">
          <string>Group</string>
         </property>
         <layout class="QHBoxLayout">
          <item>
           <widget class="MUComboBox" name="qcbGroupList">
            <property name="sizePolicy">
             <sizepolicy hsizetype="MinimumExpanding" vsizetype="Fixed">
              <horstretch>0</horstretch>
              <verstretch>0</verstretch>
             </sizepolicy>
            </property>
            <property name="maximumSize">
             <size>
              <width>300</width>
              <height>16777215</height>
             </size>
            </property>
            <property name="sizeIncrement">
             <size>
              <width>0</width>
              <height>0</height>
             </size>
            </property>
            <property name="toolTip">
             <string>List of groups</string>
            </property>
            <property name="whatsThis">
             <string>&lt;b&gt;Group&lt;/b&gt;&lt;br /&gt;
These are all the groups currently defined for the channel. To create a new group, just type in the name and press enter.</string>
            </property>
            <property name="editable">
             <bool>true</bool>
            </property>
           </widget>
          </item>
          <item>
           <widget class="QPushButton" name="qpbGroupAdd">
            <property name="toolTip">
             <string>Add new group</string>
            </property>
            <property name="whatsThis">
             <string>&lt;b&gt;Add&lt;/b&gt;&lt;br/&gt;
Add a new group.</string>
            </property>
            <property name="text">
             <string>Add</string>
            </property>
           </widget>
          </item>
          <item>
           <widget class="QPushButton" name="qpbGroupRemove">
            <property name="toolTip">
             <string>Remove selected group</string>
            </property>
            <property name="whatsThis">
             <string>&lt;b&gt;Remove&lt;/b&gt;&lt;br /&gt;This removes the currently selected group. If the group was inherited, it will not be removed from the list, but all local information about the group will be cleared.</string>
            </property>
            <property name="text">
             <string>Remove</string>
            </property>
            <property name="autoDefault">
             <bool>false</bool>
            </property>
           </widget>
          </item>
          <item>
           <widget class="QCheckBox" name="qcbGroupInherit">
            <property name="toolTip">
             <string>Inherit group members from parent</string>
            </property>
            <property name="whatsThis">
             <string>&lt;b&gt;Inherit&lt;/b&gt;&lt;br /&gt;This inherits all the members in the group from the parent, if the group is marked as &lt;i&gt;Inheritable&lt;/i&gt; in the parent channel.</string>
            </property>
            <property name="text">
             <string>Inherit</string>
            </property>
           </widget>
          </item>
          <item>
           <widget class="QCheckBox" name="qcbGroupInheritable">
            <property name="toolTip">
             <string>Make group inheritable to sub-channels</string>
            </property>
            <property name="whatsThis">
             <string>&lt;b&gt;Inheritable&lt;/b&gt;&lt;br /&gt;This makes this group inheritable to sub-channels. If the group is non-inheritable, sub-channels are still free to create a new group with the same name.</string>
            </property>
            <property name="text">
             <string>Inheritable</string>
            </property>
           </widget>
          </item>
          <item>
           <widget class="QCheckBox" name="qcbGroupInherited">
            <property name="enabled">
             <bool>false</bool>
            </property>
            <property name="toolTip">
             <string>Group was inherited from parent channel</string>
            </property>
            <property name="whatsThis">
             <string>&lt;b&gt;Inherited&lt;/b&gt;&lt;br /&gt;This indicates that the group was inherited from the parent channel. You cannot edit this flag, it's just for information.</string>
            </property>
            <property name="text">
             <string>Inherited</string>
            </property>
           </widget>
          </item>
          <item>
           <spacer name="horizontalSpacer">
            <property name="orientation">
             <enum>Qt::Horizontal</enum>
            </property>
            <property name="sizeHint" stdset="0">
             <size>
              <width>0</width>
              <height>20</height>
             </size>
            </property>
           </spacer>
          </item>
         </layout>
        </widget>
       </item>
       <item>
        <widget class="QGroupBox" name="qgbGroupMembers">
         <property name="title">
          <string>Members</string>
         </property>
         <layout class="QHBoxLayout" name="horizontalLayout_3">
          <item>
           <widget class="QWidget" name="qwMembersContainer" native="true">
            <layout class="QGridLayout" name="gridLayout">
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
             <item row="1" column="0" colspan="2">
              <widget class="QListWidget" name="qlwGroupAdd">
               <property name="toolTip">
                <string>Contains the list of members added to the group by this channel.</string>
               </property>
               <property name="whatsThis">
                <string>&lt;b&gt;Members&lt;/b&gt;&lt;br /&gt;
This list contains all members that were added to the group by the current channel. Be aware that this does not include members inherited by higher levels of the channel tree. These can be found in the &lt;i&gt;Inherited members&lt;/i&gt; list. To prevent this list to be inherited by lower level channels uncheck &lt;i&gt;Inheritable&lt;/i&gt; or manually add the members to the &lt;i&gt;Excluded members&lt;/i&gt; list.</string>
               </property>
              </widget>
             </item>
             <item row="2" column="0">
              <widget class="MUComboBox" name="qcbGroupAdd">
               <property name="sizePolicy">
                <sizepolicy hsizetype="Expanding" vsizetype="Fixed">
                 <horstretch>0</horstretch>
                 <verstretch>0</verstretch>
                </sizepolicy>
               </property>
               <property name="toolTip">
                <string>Add member to group</string>
               </property>
               <property name="whatsThis">
                <string>Type in the name of a user you wish to add to the group and click Add.</string>
               </property>
               <property name="editable">
                <bool>true</bool>
               </property>
               <property name="insertPolicy">
                <enum>QComboBox::NoInsert</enum>
               </property>
               <property name="sizeAdjustPolicy">
                <enum>QComboBox::AdjustToContents</enum>
               </property>
              </widget>
             </item>
             <item row="2" column="1">
              <widget class="QPushButton" name="qpbGroupAddAdd">
               <property name="text">
                <string>Add</string>
               </property>
              </widget>
             </item>
             <item row="0" column="0" colspan="2">
              <widget class="QLabel" name="qliGroupAdd">
               <property name="text">
                <string>Members</string>
               </property>
               <property name="buddy">
                <cstring>qlwGroupAdd</cstring>
               </property>
              </widget>
             </item>
             <item row="3" column="0" colspan="2">
              <widget class="QPushButton" name="qpbGroupAddRemove">
               <property name="text">
                <string>Remove</string>
               </property>
              </widget>
             </item>
            </layout>
           </widget>
          </item>
          <item>
           <widget class="QWidget" name="qwExcludedMembersContainer" native="true">
            <layout class="QGridLayout" name="gridLayout_2">
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
             <item row="1" column="0" colspan="2">
              <widget class="QListWidget" name="qlwGroupRemove">
               <property name="toolTip">
                <string>Contains a list of members whose group membership will not be inherited from the parent channel.</string>
               </property>
               <property name="whatsThis">
                <string>&lt;b&gt;Excluded members&lt;/b&gt;&lt;br /&gt;
Contains a list of members whose group membership will not be inherited from the parent channel.</string>
               </property>
              </widget>
             </item>
             <item row="2" column="0">
              <widget class="MUComboBox" name="qcbGroupRemove">
               <property name="sizePolicy">
                <sizepolicy hsizetype="Expanding" vsizetype="Fixed">
                 <horstretch>0</horstretch>
                 <verstretch>0</verstretch>
                </sizepolicy>
               </property>
               <property name="toolTip">
                <string>Remove member from group</string>
               </property>
               <property name="whatsThis">
                <string>Type in the name of a user you wish to remove from the group and click Add.</string>
               </property>
               <property name="editable">
                <bool>true</bool>
               </property>
               <property name="insertPolicy">
                <enum>QComboBox::NoInsert</enum>
               </property>
               <property name="sizeAdjustPolicy">
                <enum>QComboBox::AdjustToContents</enum>
               </property>
              </widget>
             </item>
             <item row="2" column="1">
              <widget class="QPushButton" name="qpbGroupRemoveAdd">
               <property name="text">
                <string>Add</string>
               </property>
              </widget>
             </item>
             <item row="3" column="0" colspan="2">
              <widget class="QPushButton" name="qpbGroupRemoveRemove">
               <property name="text">
                <string>Remove</string>
               </property>
              </widget>
             </item>
             <item row="0" column="0" colspan="2">
              <widget class="QLabel" name="qliGroupRemove">
               <property name="text">
                <string>Excluded members</string>
               </property>
               <property name="buddy">
                <cstring>qlwGroupRemove</cstring>
               </property>
              </widget>
             </item>
            </layout>
           </widget>
          </item>
          <item>
           <widget class="QWidget" name="qwInheritedMembersContainer" native="true">
            <layout class="QGridLayout" name="gridLayout_3">
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
             <item row="0" column="0">
              <widget class="QLabel" name="qliGroupInherit">
               <property name="text">
                <string>Inherited members</string>
               </property>
               <property name="buddy">
                <cstring>qlwGroupInherit</cstring>
               </property>
              </widget>
             </item>
             <item row="1" column="0">
              <widget class="QListWidget" name="qlwGroupInherit">
               <property name="toolTip">
                <string>Contains the list of members inherited by other channels.</string>
               </property>
               <property name="whatsThis">
                <string>&lt;b&gt;Inherited members&lt;/b&gt;&lt;br /&gt;
Contains the list of members inherited by the current channel. Uncheck &lt;i&gt;Inherit&lt;/i&gt; to prevent inheritance from higher level channels.</string>
               </property>
              </widget>
             </item>
             <item row="2" column="0">
              <widget class="QPushButton" name="qpbGroupInheritRemove">
               <property name="text">
                <string>Exclude</string>
               </property>
              </widget>
             </item>
            </layout>
           </widget>
          </item>
         </layout>
        </widget>
       </item>
      </layout>
     </widget>
     <widget class="QWidget" name="qwACL">
      <attribute name="title">
       <string>&amp;ACL</string>
      </attribute>
      <layout class="QHBoxLayout" name="horizontalLayout">
       <item>
        <layout class="QVBoxLayout" name="qlVerticalACL">
         <item>
          <widget class="QGroupBox" name="qgbACLs">
           <property name="title">
            <string>Active ACLs</string>
           </property>
           <layout class="QGridLayout">
            <item row="0" column="0" rowspan="2" colspan="5">
             <widget class="QListWidget" name="qlwACLs">
              <property name="toolTip">
               <string>List of entries</string>
              </property>
              <property name="whatsThis">
               <string>This shows all the entries active on this channel. Entries inherited from parent channels will be shown in italics.&lt;br /&gt;ACLs are evaluated top to bottom, meaning priority increases as you move down the list.</string>
              </property>
             </widget>
            </item>
            <item row="2" column="0">
             <widget class="QCheckBox" name="qcbACLInherit">
              <property name="toolTip">
               <string>Inherit ACL of parent?</string>
              </property>
              <property name="whatsThis">
               <string>This sets whether or not the ACL up the chain of parent channels are applied to this object. Only those entries that are marked in the parent as &quot;Apply to sub-channels&quot; will be inherited.</string>
              </property>
              <property name="text">
               <string>Inherit ACLs</string>
              </property>
             </widget>
            </item>
            <item row="2" column="1">
             <widget class="QPushButton" name="qpbACLUp">
              <property name="toolTip">
               <string>Move entry up</string>
              </property>
              <property name="whatsThis">
               <string>This moves the entry up in the list. As entries are evaluated in order, this may change the effective permissions of users. You cannot move an entry above an inherited entry, if you really need that you'll have to duplicate the inherited entry.</string>
              </property>
              <property name="text">
               <string>&amp;Up</string>
              </property>
              <property name="autoDefault">
               <bool>false</bool>
              </property>
             </widget>
            </item>
            <item row="2" column="2">
             <widget class="QPushButton" name="qpbACLDown">
              <property name="toolTip">
               <string>Move entry down</string>
              </property>
              <property name="whatsThis">
               <string>This moves the entry down in the list. As entries are evaluated in order, this may change the effective permissions of users.</string>
              </property>
              <property name="text">
               <string>&amp;Down</string>
              </property>
              <property name="autoDefault">
               <bool>false</bool>
              </property>
             </widget>
            </item>
            <item row="2" column="3">
             <widget class="QPushButton" name="qpbACLAdd">
              <property name="toolTip">
               <string>Add new entry</string>
              </property>
              <property name="whatsThis">
               <string>This adds a new entry, initially set with no permissions and applying to all.</string>
              </property>
              <property name="text">
               <string>&amp;Add</string>
              </property>
              <property name="autoDefault">
               <bool>false</bool>
              </property>
             </widget>
            </item>
            <item row="2" column="4">
             <widget class="QPushButton" name="qpbACLRemove">
              <property name="toolTip">
               <string>Remove entry</string>
              </property>
              <property name="whatsThis">
               <string>This removes the currently selected entry.</string>
              </property>
              <property name="text">
               <string>&amp;Remove</string>
              </property>
              <property name="autoDefault">
               <bool>false</bool>
              </property>
             </widget>
            </item>
           </layout>
          </widget>
         </item>
         <item>
          <widget class="QGroupBox" name="qgbACLapply">
           <property name="sizePolicy">
            <sizepolicy hsizetype="Expanding" vsizetype="Preferred">
             <horstretch>0</horstretch>
             <verstretch>0</verstretch>
            </sizepolicy>
           </property>
           <property name="title">
            <string>Context</string>
           </property>
           <layout class="QHBoxLayout" name="horizontalLayout_2">
            <item>
             <widget class="QCheckBox" name="qcbACLApplySubs">
              <property name="toolTip">
               <string>Entry should apply to sub-channels.</string>
              </property>
              <property name="whatsThis">
               <string>This makes the entry apply to sub-channels of this channel.</string>
              </property>
              <property name="text">
               <string>Applies to sub-channels</string>
              </property>
             </widget>
            </item>
            <item>
             <widget class="QCheckBox" name="qcbACLApplyHere">
              <property name="toolTip">
               <string>Entry should apply to this channel.</string>
              </property>
              <property name="whatsThis">
               <string>This makes the entry apply to this channel.</string>
              </property>
              <property name="text">
               <string>Applies to this channel</string>
              </property>
             </widget>
            </item>
           </layout>
          </widget>
         </item>
         <item>
          <widget class="QGroupBox" name="qgbACLugroup">
           <property name="sizePolicy">
            <sizepolicy hsizetype="Expanding" vsizetype="Preferred">
             <horstretch>0</horstretch>
             <verstretch>0</verstretch>
            </sizepolicy>
           </property>
           <property name="title">
            <string>User/Group</string>
           </property>
           <layout class="QGridLayout">
            <item row="0" column="0">
             <widget class="QLabel" name="qliACLGroup">
              <property name="text">
               <string>Group</string>
              </property>
              <property name="buddy">
               <cstring>qcbACLGroup</cstring>
              </property>
             </widget>
            </item>
            <item row="0" column="1">
             <widget class="MUComboBox" name="qcbACLGroup">
              <property name="sizePolicy">
               <sizepolicy hsizetype="Expanding" vsizetype="Fixed">
                <horstretch>0</horstretch>
                <verstretch>0</verstretch>
               </sizepolicy>
              </property>
              <property name="toolTip">
               <string>Group this entry applies to</string>
              </property>
              <property name="whatsThis">
               <string>This controls which group of users this entry applies to.&lt;br /&gt;Note that the group is evaluated in the context of the channel the entry is used in. For example, the default ACL on the Root channel gives &lt;i&gt;Write&lt;/i&gt; permission to the &lt;i&gt;admin&lt;/i&gt; group. This entry, if inherited by a channel, will give a user write privileges if he belongs to the &lt;i&gt;admin&lt;/i&gt; group in that channel, even if he doesn't belong to the &lt;i&gt;admin&lt;/i&gt; group in the channel where the ACL originated.&lt;br /&gt;If a group name starts with '!', its membership is negated, and if it starts with '~', it is evaluated in the channel the ACL was defined in, rather than the channel the ACL is active in.&lt;br /&gt;If a group name starts with '#', it is interpreted as an access token. Users must have entered whatever follows the '#' in their list of access tokens to match. This can be used for very simple password access to channels for non-authenticated users.&lt;br /&gt;If a group name starts with '$', it will only match users whose certificate hash matches what follows the '$'.&lt;br /&gt;A few special predefined groups are:&lt;br /&gt;&lt;b&gt;all&lt;/b&gt; - Everyone will match.&lt;br /&gt;&lt;b&gt;auth&lt;/b&gt; - All authenticated users will match.&lt;br /&gt;&lt;b&gt;sub,a,b,c&lt;/b&gt; - User currently in a sub-channel minimum &lt;i&gt;a&lt;/i&gt; common parents, and between &lt;i&gt;b&lt;/i&gt; and &lt;i&gt;c&lt;/i&gt; channels down the chain. See the website for more extensive documentation on this one.&lt;br /&gt;&lt;b&gt;in&lt;/b&gt; - Users currently in the channel will match (convenience for '&lt;i&gt;sub,0,0,0&lt;/i&gt;').&lt;br /&gt;&lt;b&gt;out&lt;/b&gt; - Users outside the channel will match (convenience for '&lt;i&gt;!sub,0,0,0&lt;/i&gt;').&lt;br /&gt;Note that an entry applies to either a user or a group, not both.</string>
              </property>
              <property name="editable">
               <bool>true</bool>
              </property>
             </widget>
            </item>
            <item row="1" column="0">
             <widget class="QLabel" name="qliACLUser">
              <property name="text">
               <string>User ID</string>
              </property>
              <property name="buddy">
               <cstring>qcbACLUser</cstring>
              </property>
             </widget>
            </item>
            <item row="1" column="1">
             <widget class="MUComboBox" name="qcbACLUser">
              <property name="sizePolicy">
               <sizepolicy hsizetype="Expanding" vsizetype="Fixed">
                <horstretch>0</horstretch>
                <verstretch>0</verstretch>
               </sizepolicy>
              </property>
              <property name="toolTip">
               <string>User this entry applies to</string>
              </property>
              <property name="whatsThis">
               <string>This controls which user this entry applies to. Just type in the user name and hit enter to query the server for a match.</string>
              </property>
              <property name="editable">
               <bool>true</bool>
              </property>
              <property name="sizeAdjustPolicy">
               <enum>QComboBox::AdjustToContents</enum>
              </property>
             </widget>
            </item>
           </layout>
          </widget>
         </item>
        </layout>
       </item>
       <item>
        <widget class="QGroupBox" name="qgbACLpermissions">
         <property name="title">
          <string>Permissions</string>
         </property>
        </widget>
       </item>
      </layout>
     </widget>
    </widget>
   </item>
   <item>
    <widget class="QDialogButtonBox" name="qdbbButtons">
     <property name="orientation">
      <enum>Qt::Horizontal</enum>
     </property>
     <property name="standardButtons">
      <set>QDialogButtonBox::Cancel|QDialogButtonBox::Ok</set>
     </property>
    </widget>
   </item>
  </layout>
 </widget>
 <customwidgets>
  <customwidget>
   <class>RichTextEditor</class>
   <extends>QWidget</extends>
   <header>RichTextEditor.h</header>
   <container>1</container>
  </customwidget>
  <customwidget>
   <class>MUComboBox</class>
   <extends>QComboBox</extends>
   <header>widgets/MUComboBox.h</header>
  </customwidget>
 </customwidgets>
 <tabstops>
  <tabstop>qleChannelPassword</tabstop>
  <tabstop>qsbChannelPosition</tabstop>
  <tabstop>qsbChannelMaxUsers</tabstop>
  <tabstop>qcbChannelTemporary</tabstop>
  <tabstop>qcbGroupList</tabstop>
  <tabstop>qpbGroupAdd</tabstop>
  <tabstop>qpbGroupRemove</tabstop>
  <tabstop>qcbGroupInherit</tabstop>
  <tabstop>qcbGroupInheritable</tabstop>
  <tabstop>qcbGroupInherited</tabstop>
  <tabstop>qlwGroupAdd</tabstop>
  <tabstop>qcbGroupAdd</tabstop>
  <tabstop>qpbGroupAddAdd</tabstop>
  <tabstop>qpbGroupAddRemove</tabstop>
  <tabstop>qlwGroupRemove</tabstop>
  <tabstop>qcbGroupRemove</tabstop>
  <tabstop>qpbGroupRemoveAdd</tabstop>
  <tabstop>qpbGroupRemoveRemove</tabstop>
  <tabstop>qlwGroupInherit</tabstop>
  <tabstop>qpbGroupInheritRemove</tabstop>
  <tabstop>qlwACLs</tabstop>
  <tabstop>qcbACLInherit</tabstop>
  <tabstop>qpbACLUp</tabstop>
  <tabstop>qpbACLDown</tabstop>
  <tabstop>qpbACLAdd</tabstop>
  <tabstop>qpbACLRemove</tabstop>
  <tabstop>qcbACLApplySubs</tabstop>
  <tabstop>qcbACLApplyHere</tabstop>
  <tabstop>qcbACLGroup</tabstop>
  <tabstop>qcbACLUser</tabstop>
  <tabstop>qdbbButtons</tabstop>
 </tabstops>
 <resources/>
 <connections>
  <connection>
   <sender>qdbbButtons</sender>
   <signal>accepted()</signal>
   <receiver>ACLEditor</receiver>
   <slot>accept()</slot>
   <hints>
    <hint type="sourcelabel">
     <x>236</x>
     <y>499</y>
    </hint>
    <hint type="destinationlabel">
     <x>157</x>
     <y>274</y>
    </hint>
   </hints>
  </connection>
  <connection>
   <sender>qdbbButtons</sender>
   <signal>rejected()</signal>
   <receiver>ACLEditor</receiver>
   <slot>reject()</slot>
   <hints>
    <hint type="sourcelabel">
     <x>304</x>
     <y>499</y>
    </hint>
    <hint type="destinationlabel">
     <x>286</x>
     <y>274</y>
    </hint>
   </hints>
  </connection>
  <connection>
   <sender>qlwGroupInherit</sender>
   <signal>doubleClicked(QModelIndex)</signal>
   <receiver>qpbGroupInheritRemove</receiver>
   <slot>animateClick()</slot>
   <hints>
    <hint type="sourcelabel">
     <x>476</x>
     <y>316</y>
    </hint>
    <hint type="destinationlabel">
     <x>574</x>
     <y>445</y>
    </hint>
   </hints>
  </connection>
  <connection>
   <sender>qleChannelName</sender>
   <signal>returnPressed()</signal>
   <receiver>ACLEditor</receiver>
   <slot>accept()</slot>
   <hints>
    <hint type="sourcelabel">
     <x>331</x>
     <y>50</y>
    </hint>
    <hint type="destinationlabel">
     <x>303</x>
     <y>254</y>
    </hint>
   </hints>
  </connection>
  <connection>
   <sender>qleChannelPassword</sender>
   <signal>returnPressed()</signal>
   <receiver>ACLEditor</receiver>
   <slot>accept()</slot>
   <hints>
    <hint type="sourcelabel">
     <x>331</x>
     <y>274</y>
    </hint>
    <hint type="destinationlabel">
     <x>303</x>
     <y>254</y>
    </hint>
   </hints>
  </connection>
 </connections>
</ui>
