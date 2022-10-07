/* Copyright 2014 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

.textLayer {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  opacity: 0.2;
  line-height: 1.0;
}

.textLayer > div {
  color: transparent;
  position: absolute;
  white-space: pre;
  cursor: text;
  -webkit-transform-origin: 0% 0%;
  -moz-transform-origin: 0% 0%;
  -o-transform-origin: 0% 0%;
  -ms-transform-origin: 0% 0%;
  transform-origin: 0% 0%;
}

.textLayer .highlight {
  margin: -1px;
  padding: 1px;

  background-color: rgb(180, 0, 170);
  border-radius: 4px;
}

.textLayer .highlight.begin {
  border-radius: 4px 0px 0px 4px;
}

.textLayer .highlight.end {
  border-radius: 0px 4px 4px 0px;
}

.textLayer .highlight.middle {
  border-radius: 0px;
}

.textLayer .highlight.selected {
  background-color: rgb(0, 100, 0);
}

.textLayer ::selection { background: rgb(0,0,255); }
.textLayer ::-moz-selection { background: rgb(0,0,255); }

.textLayer .endOfContent {
  display: block;
  position: absolute;
  left: 0px;
  top: 100%;
  right: 0px;
  bottom: 0px;
  z-index: -1;
  cursor: default;
  -webkit-user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
}

.textLayer .endOfContent.active {
  top: 0px;
}


.annotationLayer section {
  position: absolute;
}

.annotationLayer .linkAnnotation > a {
  position: absolute;
  font-size: 1em;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.annotationLayer .linkAnnotation > a /* -ms-a */  {
  background: url("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7") 0 0 repeat;
}

.annotationLayer .linkAnnotation > a:hover {
  opacity: 0.2;
  background: #ff0;
  box-shadow: 0px 2px 10px #ff0;
}

.annotationLayer .textAnnotation img {
  position: absolute;
  cursor: pointer;
}

.annotationLayer .popupWrapper {
  position: absolute;
  width: 20em;
}

.annotationLayer .popup {
  position: absolute;
  z-index: 200;
  max-width: 20em;
  background-color: #FFFF99;
  box-shadow: 0px 2px 5px #333;
  border-radius: 2px;
  padding: 0.6em;
  margin-left: 5px;
  cursor: pointer;
  word-wrap: break-word;
}

.annotationLayer .popup h1 {
  font-size: 1em;
  border-bottom: 1px solid #000000;
  padding-bottom: 0.2em;
}

.annotationLayer .popup p {
  padding-top: 0.2em;
}

.annotationLayer .highlightAnnotation,
.annotationLayer .underlineAnnotation,
.annotationLayer .squigglyAnnotation,
.annotationLayer .strikeoutAnnotation {
  cursor: pointer;
}

.pdfViewer .canvasWrapper {
  overflow: hidden;
}

.pdfViewer .page {
  direction: ltr;
  width: 816px;
  height: 1056px;
  margin: 1px auto -8px auto;
  position: relative;
  overflow: visible;
  border: 9px solid transparent;
  background-clip: content-box;
  border-image: url(images/shadow.png) 9 9 repeat;
  background-color: white;
}

.pdfViewer.removePageBorders .page {
  margin: 0px auto 10px auto;
  border: none;
}

.pdfViewer .page canvas {
  margin: 0;
  display: block;
}

.pdfViewer .page .loadingIcon {
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: url('images/loading-icon.gif') center no-repeat;
}

.pdfPresentationMode:-webkit-full-screen .pdfViewer .page {
  margin-bottom: 100%;
  border: 0;
}

.pdfPresentationMode:-moz-full-screen .pdfViewer .page {
  margin-bottom: 100%;
  border: 0;
}

.pdfPresentationMode:-ms-fullscreen .pdfViewer .page {
  margin-bottom: 100% !important;
  border: 0;
}

.pdfPresentationMode:fullscreen .pdfViewer .page {
  margin-bottom: 100%;
  border: 0;
}

* {
  padding: 0;
  margin: 0;
}

html {
  height: 100%;
  /* Font size is needed to make the activity bar the correct size. */
  font-size: 10px;
}

body {
  height: 100%;
  background-color: #404040;
  background-image: url(images/texture.png);
}

body,
input,
button,
select {
  font: message-box;
  outline: none;
}

.hidden {
  display: none !important;
}
[hidden] {
  display: none !important;
}

#viewerContainer.pdfPresentationMode:-webkit-full-screen {
  top: 0px;
  border-top: 2px solid transparent;
  background-color: #000;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: none;
  -webkit-user-select: none;
}

#viewerContainer.pdfPresentationMode:-moz-full-screen {
  top: 0px;
  border-top: 2px solid transparent;
  background-color: #000;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: none;
  -moz-user-select: none;
}

#viewerContainer.pdfPresentationMode:-ms-fullscreen {
  top: 0px !important;
  border-top: 2px solid transparent;
  width: 100%;
  height: 100%;
  overflow: hidden !important;
  cursor: none;
  -ms-user-select: none;
}

#viewerContainer.pdfPresentationMode:-ms-fullscreen::-ms-backdrop {
  background-color: #000;
}

#viewerContainer.pdfPresentationMode:fullscreen {
  top: 0px;
  border-top: 2px solid transparent;
  background-color: #000;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.pdfPresentationMode:-webkit-full-screen a:not(.internalLink) {
  display: none;
}

.pdfPresentationMode:-moz-full-screen a:not(.internalLink) {
  display: none;
}

.pdfPresentationMode:-ms-fullscreen a:not(.internalLink) {
  display: none !important;
}

.pdfPresentationMode:fullscreen a:not(.internalLink) {
  display: none;
}

.pdfPresentationMode:-webkit-full-screen .textLayer > div {
  cursor: none;
}

.pdfPresentationMode:-moz-full-screen .textLayer > div {
  cursor: none;
}

.pdfPresentationMode:-ms-fullscreen .textLayer > div {
  cursor: none;
}

.pdfPresentationMode:fullscreen .textLayer > div {
  cursor: none;
}

.pdfPresentationMode.pdfPresentationModeControls > *,
.pdfPresentationMode.pdfPresentationModeControls .textLayer > div {
  cursor: default;
}

/* outer/inner center provides horizontal center */
.outerCenter {
  pointer-events: none;
  position: relative;
}
html[dir='ltr'] .outerCenter {
  float: right;
  right: 50%;
}
html[dir='rtl'] .outerCenter {
  float: left;
  left: 50%;
}
.innerCenter {
  pointer-events: auto;
  position: relative;
}
html[dir='ltr'] .innerCenter {
  float: right;
  right: -50%;
}
html[dir='rtl'] .innerCenter {
  float: left;
  left: -50%;
}

#outerContainer {
  width: 100%;
  height: 100%;
  position: relative;
}

#sidebarContainer {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 200px;
  visibility: hidden;
  -webkit-transition-duration: 200ms;
  -webkit-transition-timing-function: ease;
  transition-duration: 200ms;
  transition-timing-function: ease;

}
html[dir='ltr'] #sidebarContainer {
  -webkit-transition-property: left;
  transition-property: left;
  left: -200px;
}
html[dir='rtl'] #sidebarContainer {
  -webkit-transition-property: right;
  transition-property: right;
  right: -200px;
}

#outerContainer.sidebarMoving > #sidebarContainer,
#outerContainer.sidebarOpen > #sidebarContainer {
  visibility: visible;
}
html[dir='ltr'] #outerContainer.sidebarOpen > #sidebarContainer {
  left: 0px;
}
html[dir='rtl'] #outerContainer.sidebarOpen > #sidebarContainer {
  right: 0px;
}

#mainContainer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  min-width: 320px;
  -webkit-transition-duration: 200ms;
  -webkit-transition-timing-function: ease;
  transition-duration: 200ms;
  transition-timing-function: ease;
}
html[dir='ltr'] #outerContainer.sidebarOpen > #mainContainer {
  -webkit-transition-property: left;
  transition-property: left;
  left: 200px;
}
html[dir='rtl'] #outerContainer.sidebarOpen > #mainContainer {
  -webkit-transition-property: right;
  transition-property: right;
  right: 200px;
}

#sidebarContent {
  top: 32px;
  bottom: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  width: 200px;
  background-color: hsla(0,0%,0%,.1);
}
html[dir='ltr'] #sidebarContent {
  left: 0;
  box-shadow: inset -1px 0 0 hsla(0,0%,0%,.25);
}
html[dir='rtl'] #sidebarContent {
  right: 0;
  box-shadow: inset 1px 0 0 hsla(0,0%,0%,.25);
}

#viewerContainer {
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  top: 32px;
  right: 0;
  bottom: 0;
  left: 0;
  outline: none;
}
html[dir='ltr'] #viewerContainer {
  box-shadow: inset 1px 0 0 hsla(0,0%,100%,.05);
}
html[dir='rtl'] #viewerContainer {
  box-shadow: inset -1px 0 0 hsla(0,0%,100%,.05);
}

.toolbar {
  position: relative;
  left: 0;
  right: 0;
  z-index: 9999;
  cursor: default;
}

#toolbarContainer {
  width: 100%;
}

#toolbarSidebar {
  width: 200px;
  height: 32px;
  background-color: #424242; /* fallback */
  background-image: url(images/texture.png),
                    linear-gradient(hsla(0,0%,30%,.99), hsla(0,0%,25%,.95));
}
html[dir='ltr'] #toolbarSidebar {
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25),
              inset 0 -1px 0 hsla(0,0%,100%,.05),
              0 1px 0 hsla(0,0%,0%,.15),
              0 0 1px hsla(0,0%,0%,.1);
}
html[dir='rtl'] #toolbarSidebar {
  box-shadow: inset 1px 0 0 rgba(0, 0, 0, 0.25),
              inset 0 1px 0 hsla(0,0%,100%,.05),
              0 1px 0 hsla(0,0%,0%,.15),
              0 0 1px hsla(0,0%,0%,.1);
}

#toolbarContainer, .findbar, .secondaryToolbar {
  position: relative;
  height: 32px;
  background-color: #474747; /* fallback */
  background-image: url(images/texture.png),
                    linear-gradient(hsla(0,0%,32%,.99), hsla(0,0%,27%,.95));
}
html[dir='ltr'] #toolbarContainer, .findbar, .secondaryToolbar {
  box-shadow: inset 1px 0 0 hsla(0,0%,100%,.08),
              inset 0 1px 1px hsla(0,0%,0%,.15),
              inset 0 -1px 0 hsla(0,0%,100%,.05),
              0 1px 0 hsla(0,0%,0%,.15),
              0 1px 1px hsla(0,0%,0%,.1);
}
html[dir='rtl'] #toolbarContainer, .findbar, .secondaryToolbar {
  box-shadow: inset -1px 0 0 hsla(0,0%,100%,.08),
              inset 0 1px 1px hsla(0,0%,0%,.15),
              inset 0 -1px 0 hsla(0,0%,100%,.05),
              0 1px 0 hsla(0,0%,0%,.15),
              0 1px 1px hsla(0,0%,0%,.1);
}

#toolbarViewer {
  height: 32px;
}

#loadingBar {
  position: relative;
  width: 100%;
  height: 4px;
  background-color: #333;
  border-bottom: 1px solid #333;
}

#loadingBar .progress {
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background-color: #ddd;
  overflow: hidden;
  -webkit-transition: width 200ms;
  transition: width 200ms;
}

@-webkit-keyframes progressIndeterminate {
  0% { left: -142px; }
  100% { left: 0; }
}

@keyframes progressIndeterminate {
  0% { left: -142px; }
  100% { left: 0; }
}

#loadingBar .progress.indeterminate {
  background-color: #999;
  -webkit-transition: none;
  transition: none;
}

#loadingBar .progress.indeterminate .glimmer {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: calc(100% + 150px);

  background: repeating-linear-gradient(135deg,
                                        #bbb 0, #999 5px,
                                        #999 45px, #ddd 55px,
                                        #ddd 95px, #bbb 100px);

  -webkit-animation: progressIndeterminate 950ms linear infinite;
  animation: progressIndeterminate 950ms linear infinite;
}

.findbar, .secondaryToolbar {
  top: 32px;
  position: absolute;
  z-index: 10000;
  height: 32px;

  min-width: 16px;
  padding: 0px 6px 0px 6px;
  margin: 4px 2px 4px 2px;
  color: hsl(0,0%,85%);
  font-size: 12px;
  line-height: 14px;
  text-align: left;
  cursor: default;
}

html[dir='ltr'] .findbar {
  left: 68px;
}

html[dir='rtl'] .findbar {
  right: 68px;
}

.findbar label {
  -webkit-user-select: none;
  -moz-user-select: none;
}

#findInput[data-status="pending"] {
  background-image: url(images/loading-small.png);
  background-repeat: no-repeat;
  background-position: right;
}
html[dir='rtl'] #findInput[data-status="pending"] {
  background-position: left;
}

.secondaryToolbar {
  padding: 6px;
  height: auto;
  z-index: 30000;
}
html[dir='ltr'] .secondaryToolbar {
  right: 4px;
}
html[dir='rtl'] .secondaryToolbar {
  left: 4px;
}

#secondaryToolbarButtonContainer {
  max-width: 200px;
  max-height: 400px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  margin-bottom: -4px;
}

.doorHanger,
.doorHangerRight {
  border: 1px solid hsla(0,0%,0%,.5);
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}
.doorHanger:after, .doorHanger:before,
.doorHangerRight:after, .doorHangerRight:before {
  bottom: 100%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}
.doorHanger:after,
.doorHangerRight:after {
  border-bottom-color: hsla(0,0%,32%,.99);
  border-width: 8px;
}
.doorHanger:before,
.doorHangerRight:before {
  border-bottom-color: hsla(0,0%,0%,.5);
  border-width: 9px;
}

html[dir='ltr'] .doorHanger:after,
html[dir='rtl'] .doorHangerRight:after {
  left: 13px;
  margin-left: -8px;
}

html[dir='ltr'] .doorHanger:before,
html[dir='rtl'] .doorHangerRight:before {
  left: 13px;
  margin-left: -9px;
}

html[dir='rtl'] .doorHanger:after,
html[dir='ltr'] .doorHangerRight:after {
  right: 13px;
  margin-right: -8px;
}

html[dir='rtl'] .doorHanger:before,
html[dir='ltr'] .doorHangerRight:before {
  right: 13px;
  margin-right: -9px;
}

#findResultsCount {
  background-color: hsl(0, 0%, 85%);
  color: hsl(0, 0%, 32%);
  text-align: center;
  padding: 3px 4px;
}

#findMsg {
  font-style: italic;
  color: #A6B7D0;
}

#findInput.notFound {
  background-color: rgb(255, 102, 102);
}

html[dir='ltr'] #toolbarViewerLeft {
  margin-left: -1px;
}
html[dir='rtl'] #toolbarViewerRight {
  margin-right: -1px;
}

html[dir='ltr'] #toolbarViewerLeft,
html[dir='rtl'] #toolbarViewerRight {
  position: absolute;
  top: 0;
  left: 0;
}
html[dir='ltr'] #toolbarViewerRight,
html[dir='rtl'] #toolbarViewerLeft {
  position: absolute;
  top: 0;
  right: 0;
}
html[dir='ltr'] #toolbarViewerLeft > *,
html[dir='ltr'] #toolbarViewerMiddle > *,
html[dir='ltr'] #toolbarViewerRight > *,
html[dir='ltr'] .findbar > * {
  position: relative;
  float: left;
}
html[dir='rtl'] #toolbarViewerLeft > *,
html[dir='rtl'] #toolbarViewerMiddle > *,
html[dir='rtl'] #toolbarViewerRight > *,
html[dir='rtl'] .findbar > * {
  position: relative;
  float: right;
}

html[dir='ltr'] .splitToolbarButton {
  margin: 3px 2px 4px 0;
  display: inline-block;
}
html[dir='rtl'] .splitToolbarButton {
  margin: 3px 0 4px 2px;
  display: inline-block;
}
html[dir='ltr'] .splitToolbarButton > .toolbarButton {
  border-radius: 0;
  float: left;
}
html[dir='rtl'] .splitToolbarButton > .toolbarButton {
  border-radius: 0;
  float: right;
}

.toolbarButton,
.secondaryToolbarButton,
.overlayButton {
  border: 0 none;
  background: none;
  width: 32px;
  height: 25px;
}

.toolbarButton > span {
  display: inline-block;
  width: 0;
  height: 0;
  overflow: hidden;
}

.toolbarButton[disabled],
.secondaryToolbarButton[disabled],
.overlayButton[disabled] {
  opacity: .5;
}

.toolbarButton.group {
  margin-right: 0;
}

.splitToolbarButton.toggled .toolbarButton {
  margin: 0;
}

.splitToolbarButton:hover > .toolbarButton,
.splitToolbarButton:focus > .toolbarButton,
.splitToolbarButton.toggled > .toolbarButton,
.toolbarButton.textButton {
  background-color: hsla(0,0%,0%,.12);
  background-image: linear-gradient(hsla(0,0%,100%,.05), hsla(0,0%,100%,0));
  background-clip: padding-box;
  border: 1px solid hsla(0,0%,0%,.35);
  border-color: hsla(0,0%,0%,.32) hsla(0,0%,0%,.38) hsla(0,0%,0%,.42);
  box-shadow: 0 1px 0 hsla(0,0%,100%,.05) inset,
              0 0 1px hsla(0,0%,100%,.15) inset,
              0 1px 0 hsla(0,0%,100%,.05);
  -webkit-transition-property: background-color, border-color, box-shadow;
  -webkit-transition-duration: 150ms;
  -webkit-transition-timing-function: ease;
  transition-property: background-color, border-color, box-shadow;
  transition-duration: 150ms;
  transition-timing-function: ease;

}
.splitToolbarButton > .toolbarButton:hover,
.splitToolbarButton > .toolbarButton:focus,
.dropdownToolbarButton:hover,
.overlayButton:hover,
.overlayButton:focus,
.toolbarButton.textButton:hover,
.toolbarButton.textButton:focus {
  background-color: hsla(0,0%,0%,.2);
  box-shadow: 0 1px 0 hsla(0,0%,100%,.05) inset,
              0 0 1px hsla(0,0%,100%,.15) inset,
              0 0 1px hsla(0,0%,0%,.05);
  z-index: 199;
}
.splitToolbarButton > .toolbarButton {
  position: relative;
}
html[dir='ltr'] .splitToolbarButton > .toolbarButton:first-child,
html[dir='rtl'] .splitToolbarButton > .toolbarButton:last-child {
  position: relative;
  margin: 0;
  margin-right: -1px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  border-right-color: transparent;
}
html[dir='ltr'] .splitToolbarButton > .toolbarButton:last-child,
html[dir='rtl'] .splitToolbarButton > .toolbarButton:first-child {
  position: relative;
  margin: 0;
  margin-left: -1px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: transparent;
}
.splitToolbarButtonSeparator {
  padding: 8px 0;
  width: 1px;
  background-color: hsla(0,0%,0%,.5);
  z-index: 99;
  box-shadow: 0 0 0 1px hsla(0,0%,100%,.08);
  display: inline-block;
  margin: 5px 0;
}
html[dir='ltr'] .splitToolbarButtonSeparator {
  float: left;
}
html[dir='rtl'] .splitToolbarButtonSeparator {
  float: right;
}
.splitToolbarButton:hover > .splitToolbarButtonSeparator,
.splitToolbarButton.toggled > .splitToolbarButtonSeparator {
  padding: 12px 0;
  margin: 1px 0;
  box-shadow: 0 0 0 1px hsla(0,0%,100%,.03);
  -webkit-transition-property: padding;
  -webkit-transition-duration: 10ms;
  -webkit-transition-timing-function: ease;
  transition-property: padding;
  transition-duration: 10ms;
  transition-timing-function: ease;
}

.toolbarButton,
.dropdownToolbarButton,
.secondaryToolbarButton,
.overlayButton {
  min-width: 16px;
  padding: 2px 6px 0;
  border: 1px solid transparent;
  border-radius: 2px;
  color: hsla(0,0%,100%,.8);
  font-size: 12px;
  line-height: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  /* Opera does not support user-select, use <... unselectable="on"> instead */
  cursor: default;
  -webkit-transition-property: background-color, border-color, box-shadow;
  -webkit-transition-duration: 150ms;
  -webkit-transition-timing-function: ease;
  transition-property: background-color, border-color, box-shadow;
  transition-duration: 150ms;
  transition-timing-function: ease;
}

html[dir='ltr'] .toolbarButton,
html[dir='ltr'] .overlayButton,
html[dir='ltr'] .dropdownToolbarButton {
  margin: 3px 2px 4px 0;
}
html[dir='rtl'] .toolbarButton,
html[dir='rtl'] .overlayButton,
html[dir='rtl'] .dropdownToolbarButton {
  margin: 3px 0 4px 2px;
}

.toolbarButton:hover,
.toolbarButton:focus,
.dropdownToolbarButton,
.overlayButton,
.secondaryToolbarButton:hover,
.secondaryToolbarButton:focus {
  background-color: hsla(0,0%,0%,.12);
  background-image: linear-gradient(hsla(0,0%,100%,.05), hsla(0,0%,100%,0));
  background-clip: padding-box;
  border: 1px solid hsla(0,0%,0%,.35);
  border-color: hsla(0,0%,0%,.32) hsla(0,0%,0%,.38) hsla(0,0%,0%,.42);
  box-shadow: 0 1px 0 hsla(0,0%,100%,.05) inset,
              0 0 1px hsla(0,0%,100%,.15) inset,
              0 1px 0 hsla(0,0%,100%,.05);
}

.toolbarButton:hover:active,
.overlayButton:hover:active,
.dropdownToolbarButton:hover:active,
.secondaryToolbarButton:hover:active {
  background-color: hsla(0,0%,0%,.2);
  background-image: linear-gradient(hsla(0,0%,100%,.05), hsla(0,0%,100%,0));
  border-color: hsla(0,0%,0%,.35) hsla(0,0%,0%,.4) hsla(0,0%,0%,.45);
  box-shadow: 0 1px 1px hsla(0,0%,0%,.1) inset,
              0 0 1px hsla(0,0%,0%,.2) inset,
              0 1px 0 hsla(0,0%,100%,.05);
  -webkit-transition-property: background-color, border-color, box-shadow;
  -webkit-transition-duration: 10ms;
  -webkit-transition-timing-function: linear;
  transition-property: background-color, border-color, box-shadow;
  transition-duration: 10ms;
  transition-timing-function: linear;
}

.toolbarButton.toggled,
.splitToolbarButton.toggled > .toolbarButton.toggled,
.secondaryToolbarButton.toggled {
  background-color: hsla(0,0%,0%,.3);
  background-image: linear-gradient(hsla(0,0%,100%,.05), hsla(0,0%,100%,0));
  border-color: hsla(0,0%,0%,.4) hsla(0,0%,0%,.45) hsla(0,0%,0%,.5);
  box-shadow: 0 1px 1px hsla(0,0%,0%,.1) inset,
              0 0 1px hsla(0,0%,0%,.2) inset,
              0 1px 0 hsla(0,0%,100%,.05);
  -webkit-transition-property: background-color, border-color, box-shadow;
  -webkit-transition-duration: 10ms;
  -webkit-transition-timing-function: linear;
  transition-property: background-color, border-color, box-shadow;
  transition-duration: 10ms;
  transition-timing-function: linear;
}

.toolbarButton.toggled:hover:active,
.splitToolbarButton.toggled > .toolbarButton.toggled:hover:active,
.secondaryToolbarButton.toggled:hover:active {
  background-color: hsla(0,0%,0%,.4);
  border-color: hsla(0,0%,0%,.4) hsla(0,0%,0%,.5) hsla(0,0%,0%,.55);
  box-shadow: 0 1px 1px hsla(0,0%,0%,.2) inset,
              0 0 1px hsla(0,0%,0%,.3) inset,
              0 1px 0 hsla(0,0%,100%,.05);
}

.dropdownToolbarButton {
  width: 120px;
  max-width: 120px;
  padding: 0;
  overflow: hidden;
  background: url(images/toolbarButton-menuArrows.png) no-repeat;
}
html[dir='ltr'] .dropdownToolbarButton {
  background-position: 95%;
}
html[dir='rtl'] .dropdownToolbarButton {
  background-position: 5%;
}

.dropdownToolbarButton > select {
  min-width: 140px;
  font-size: 12px;
  color: hsl(0,0%,95%);
  margin: 0;
  padding: 3px 2px 2px;
  border: none;
  background: rgba(0,0,0,0); /* Opera does not support 'transparent' <select> background */
}

.dropdownToolbarButton > select > option {
  background: hsl(0,0%,24%);
}

#customScaleOption {
  display: none;
}

#pageWidthOption {
  border-bottom: 1px rgba(255, 255, 255, .5) solid;
}

html[dir='ltr'] .splitToolbarButton:first-child,
html[dir='ltr'] .toolbarButton:first-child,
html[dir='rtl'] .splitToolbarButton:last-child,
html[dir='rtl'] .toolbarButton:last-child {
  margin-left: 4px;
}
html[dir='ltr'] .splitToolbarButton:last-child,
html[dir='ltr'] .toolbarButton:last-child,
html[dir='rtl'] .splitToolbarButton:first-child,
html[dir='rtl'] .toolbarButton:first-child {
  margin-right: 4px;
}

.toolbarButtonSpacer {
  width: 30px;
  display: inline-block;
  height: 1px;
}

.toolbarButtonFlexibleSpacer {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  min-width: 30px;
}

html[dir='ltr'] #findPrevious {
  margin-left: 3px;
}
html[dir='ltr'] #findNext {
  margin-right: 3px;
}

html[dir='rtl'] #findPrevious {
  margin-right: 3px;
}
html[dir='rtl'] #findNext {
  margin-left: 3px;
}

.toolbarButton::before,
.secondaryToolbarButton::before {
  /* All matching images have a size of 16x16
   * All relevant containers have a size of 32x25 */
  position: absolute;
  display: inline-block;
  top: 4px;
  left: 7px;
}

html[dir="ltr"] .secondaryToolbarButton::before {
  left: 4px;
}
html[dir="rtl"] .secondaryToolbarButton::before {
  right: 4px;
}

html[dir='ltr'] .toolbarButton#sidebarToggle::before {
  content: url(images/toolbarButton-sidebarToggle.png);
}
html[dir='rtl'] .toolbarButton#sidebarToggle::before {
  content: url(images/toolbarButton-sidebarToggle-rtl.png);
}

html[dir='ltr'] .toolbarButton#secondaryToolbarToggle::before {
  content: url(images/toolbarButton-secondaryToolbarToggle.png);
}
html[dir='rtl'] .toolbarButton#secondaryToolbarToggle::before {
  content: url(images/toolbarButton-secondaryToolbarToggle-rtl.png);
}

html[dir='ltr'] .toolbarButton.findPrevious::before {
  content: url(images/findbarButton-previous.png);
}
html[dir='rtl'] .toolbarButton.findPrevious::before {
  content: url(images/findbarButton-previous-rtl.png);
}

html[dir='ltr'] .toolbarButton.findNext::before {
  content: url(images/findbarButton-next.png);
}
html[dir='rtl'] .toolbarButton.findNext::before {
  content: url(images/findbarButton-next-rtl.png);
}

html[dir='ltr'] .toolbarButton.pageUp::before {
  content: url(images/toolbarButton-pageUp.png);
}
html[dir='rtl'] .toolbarButton.pageUp::before {
  content: url(images/toolbarButton-pageUp-rtl.png);
}

html[dir='ltr'] .toolbarButton.pageDown::before {
  content: url(images/toolbarButton-pageDown.png);
}
html[dir='rtl'] .toolbarButton.pageDown::before {
  content: url(images/toolbarButton-pageDown-rtl.png);
}

.toolbarButton.zoomOut::before {
  content: url(images/toolbarButton-zoomOut.png);
}

.toolbarButton.zoomIn::before {
  content: url(images/toolbarButton-zoomIn.png);
}

.toolbarButton.presentationMode::before,
.secondaryToolbarButton.presentationMode::before {
  content: url(images/toolbarButton-presentationMode.png);
}

.toolbarButton.print::before,
.secondaryToolbarButton.print::before {
  content: url(images/toolbarButton-print.png);
}

.toolbarButton.openFile::before,
.secondaryToolbarButton.openFile::before {
  content: url(images/toolbarButton-openFile.png);
}

.toolbarButton.download::before,
.secondaryToolbarButton.download::before {
  content: url(images/toolbarButton-download.png);
}

.toolbarButton.bookmark,
.secondaryToolbarButton.bookmark {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  outline: none;
  padding-top: 4px;
  text-decoration: none;
}
.secondaryToolbarButton.bookmark {
  padding-top: 5px;
}

.bookmark[href='#'] {
  opacity: .5;
  pointer-events: none;
}

.toolbarButton.bookmark::before,
.secondaryToolbarButton.bookmark::before {
  content: url(images/toolbarButton-bookmark.png);
}

#viewThumbnail.toolbarButton::before {
  content: url(images/toolbarButton-viewThumbnail.png);
}

html[dir="ltr"] #viewOutline.toolbarButton::before {
  content: url(images/toolbarButton-viewOutline.png);
}
html[dir="rtl"] #viewOutline.toolbarButton::before {
  content: url(images/toolbarButton-viewOutline-rtl.png);
}

#viewAttachments.toolbarButton::before {
  content: url(images/toolbarButton-viewAttachments.png);
}

#viewFind.toolbarButton::before {
  content: url(images/toolbarButton-search.png);
}

.secondaryToolbarButton {
  position: relative;
  margin: 0 0 4px 0;
  padding: 3px 0 1px 0;
  height: auto;
  min-height: 25px;
  width: auto;
  min-width: 100%;
  white-space: normal;
}
html[dir="ltr"] .secondaryToolbarButton {
  padding-left: 24px;
  text-align: left;
}
html[dir="rtl"] .secondaryToolbarButton {
  padding-right: 24px;
  text-align: right;
}
html[dir="ltr"] .secondaryToolbarButton.bookmark {
  padding-left: 27px;
}
html[dir="rtl"] .secondaryToolbarButton.bookmark {
  padding-right: 27px;
}

html[dir="ltr"] .secondaryToolbarButton > span {
  padding-right: 4px;
}
html[dir="rtl"] .secondaryToolbarButton > span {
  padding-left: 4px;
}

.secondaryToolbarButton.firstPage::before {
  content: url(images/secondaryToolbarButton-firstPage.png);
}

.secondaryToolbarButton.lastPage::before {
  content: url(images/secondaryToolbarButton-lastPage.png);
}

.secondaryToolbarButton.rotateCcw::before {
  content: url(images/secondaryToolbarButton-rotateCcw.png);
}

.secondaryToolbarButton.rotateCw::before {
  content: url(images/secondaryToolbarButton-rotateCw.png);
}

.secondaryToolbarButton.handTool::before {
  content: url(images/secondaryToolbarButton-handTool.png);
}

.secondaryToolbarButton.documentProperties::before {
  content: url(images/secondaryToolbarButton-documentProperties.png);
}

.verticalToolbarSeparator {
  display: block;
  padding: 8px 0;
  margin: 8px 4px;
  width: 1px;
  background-color: hsla(0,0%,0%,.5);
  box-shadow: 0 0 0 1px hsla(0,0%,100%,.08);
}
html[dir='ltr'] .verticalToolbarSeparator {
  margin-left: 2px;
}
html[dir='rtl'] .verticalToolbarSeparator {
  margin-right: 2px;
}

.horizontalToolbarSeparator {
  display: block;
  margin: 0 0 4px 0;
  height: 1px;
  width: 100%;
  background-color: hsla(0,0%,0%,.5);
  box-shadow: 0 0 0 1px hsla(0,0%,100%,.08);
}

.toolbarField {
  padding: 3px 6px;
  margin: 4px 0 4px 0;
  border: 1px solid transparent;
  border-radius: 2px;
  background-color: hsla(0,0%,100%,.09);
  background-image: linear-gradient(hsla(0,0%,100%,.05), hsla(0,0%,100%,0));
  background-clip: padding-box;
  border: 1px solid hsla(0,0%,0%,.35);
  border-color: hsla(0,0%,0%,.32) hsla(0,0%,0%,.38) hsla(0,0%,0%,.42);
  box-shadow: 0 1px 0 hsla(0,0%,0%,.05) inset,
              0 1px 0 hsla(0,0%,100%,.05);
  color: hsl(0,0%,95%);
  font-size: 12px;
  line-height: 14px;
  outline-style: none;
  transition-property: background-color, border-color, box-shadow;
  transition-duration: 150ms;
  transition-timing-function: ease;
}

.toolbarField[type=checkbox] {
  display: inline-block;
  margin: 8px 0px;
}

.toolbarField.pageNumber {
  -moz-appearance: textfield; /* hides the spinner in moz */
  min-width: 16px;
  text-align: right;
  width: 40px;
}

.toolbarField.pageNumber.visiblePageIsLoading {
  background-image: url(images/loading-small.png);
  background-repeat: no-repeat;
  background-position: 1px;
}

.toolbarField.pageNumber::-webkit-inner-spin-button,
.toolbarField.pageNumber::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.toolbarField:hover {
  background-color: hsla(0,0%,100%,.11);
  border-color: hsla(0,0%,0%,.4) hsla(0,0%,0%,.43) hsla(0,0%,0%,.45);
}

.toolbarField:focus {
  background-color: hsla(0,0%,100%,.15);
  border-color: hsla(204,100%,65%,.8) hsla(204,100%,65%,.85) hsla(204,100%,65%,.9);
}

.toolbarLabel {
  min-width: 16px;
  padding: 3px 6px 3px 2px;
  margin: 4px 2px 4px 0;
  border: 1px solid transparent;
  border-radius: 2px;
  color: hsl(0,0%,85%);
  font-size: 12px;
  line-height: 14px;
  text-align: left;
  -webkit-user-select: none;
  -moz-user-select: none;
  cursor: default;
}

#thumbnailView {
  position: absolute;
  width: 120px;
  top: 0;
  bottom: 0;
  padding: 10px 40px 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

.thumbnail {
  float: left;
  margin-bottom: 5px;
}

#thumbnailView > a:last-of-type > .thumbnail {
  margin-bottom: 10px;
}

#thumbnailView > a:last-of-type > .thumbnail:not([data-loaded]) {
  margin-bottom: 9px;
}

.thumbnail:not([data-loaded]) {
  border: 1px dashed rgba(255, 255, 255, 0.5);
  margin: -1px -1px 4px -1px;
}

.thumbnailImage {
  border: 1px solid transparent;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(0, 0, 0, 0.3);
  opacity: 0.8;
  z-index: 99;
  background-color: white;
  background-clip: content-box;
}

.thumbnailSelectionRing {
  border-radius: 2px;
  padding: 7px;
}

a:focus > .thumbnail > .thumbnailSelectionRing > .thumbnailImage,
.thumbnail:hover > .thumbnailSelectionRing > .thumbnailImage {
  opacity: .9;
}

a:focus > .thumbnail > .thumbnailSelectionRing,
.thumbnail:hover > .thumbnailSelectionRing {
  background-color: hsla(0,0%,100%,.15);
  background-image: linear-gradient(hsla(0,0%,100%,.05), hsla(0,0%,100%,0));
  background-clip: padding-box;
  box-shadow: 0 1px 0 hsla(0,0%,100%,.05) inset,
              0 0 1px hsla(0,0%,100%,.2) inset,
              0 0 1px hsla(0,0%,0%,.2);
  color: hsla(0,0%,100%,.9);
}

.thumbnail.selected > .thumbnailSelectionRing > .thumbnailImage {
  box-shadow: 0 0 0 1px hsla(0,0%,0%,.5);
  opacity: 1;
}

.thumbnail.selected > .thumbnailSelectionRing {
  background-color: hsla(0,0%,100%,.3);
  background-image: linear-gradient(hsla(0,0%,100%,.05), hsla(0,0%,100%,0));
  background-clip: padding-box;
  box-shadow: 0 1px 0 hsla(0,0%,100%,.05) inset,
              0 0 1px hsla(0,0%,100%,.1) inset,
              0 0 1px hsla(0,0%,0%,.2);
  color: hsla(0,0%,100%,1);
}

#outlineView,
#attachmentsView {
  position: absolute;
  width: 192px;
  top: 0;
  bottom: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  -webkit-user-select: none;
  -moz-user-select: none;
}

#outlineView {
  padding: 4px 4px 0;
}
#attachmentsView {
  padding: 3px 4px 0;
}

html[dir='ltr'] .outlineWithDeepNesting > .outlineItem,
html[dir='ltr'] .outlineItem > .outlineItems {
  margin-left: 20px;
}

html[dir='rtl'] .outlineWithDeepNesting > .outlineItem,
html[dir='rtl'] .outlineItem > .outlineItems {
  margin-right: 20px;
}

.outlineItem > a,
.attachmentsItem > button {
  text-decoration: none;
  display: inline-block;
  min-width: 95%;
  min-width: calc(100% - 4px); /* Subtract the right padding (left, in RTL mode)
                                  of the container. */
  height: auto;
  margin-bottom: 1px;
  border-radius: 2px;
  color: hsla(0,0%,100%,.8);
  font-size: 13px;
  line-height: 15px;
  -moz-user-select: none;
  white-space: normal;
}

.attachmentsItem > button {
  border: 0 none;
  background: none;
  cursor: pointer;
  width: 100%;
}

html[dir='ltr'] .outlineItem > a {
  padding: 2px 0 5px 4px;
}
html[dir='ltr'] .attachmentsItem > button {
  padding: 2px 0 3px 7px;
  text-align: left;
}

html[dir='rtl'] .outlineItem > a {
  padding: 2px 4px 5px 0;
}
html[dir='rtl'] .attachmentsItem > button {
  padding: 2px 7px 3px 0;
  text-align: right;
}

.outlineItemToggler {
  position: relative;
  height: 0;
  width: 0;
  color: hsla(0,0%,100%,.5);
}
.outlineItemToggler::before {
  content: url(images/treeitem-expanded.png);
  display: inline-block;
  position: absolute;
}
html[dir='ltr'] .outlineItemToggler.outlineItemsHidden::before {
  content: url(images/treeitem-collapsed.png);
}
html[dir='rtl'] .outlineItemToggler.outlineItemsHidden::before {
  content: url(images/treeitem-collapsed-rtl.png);
}
.outlineItemToggler.outlineItemsHidden ~ .outlineItems {
  display: none;
}
html[dir='ltr'] .outlineItemToggler {
  float: left;
}
html[dir='rtl'] .outlineItemToggler {
  float: right;
}
html[dir='ltr'] .outlineItemToggler::before {
  right: 4px;
}
html[dir='rtl'] .outlineItemToggler::before {
  left: 4px;
}

.outlineItemToggler:hover,
.outlineItemToggler:hover + a,
.outlineItemToggler:hover ~ .outlineItems,
.outlineItem > a:hover,
.attachmentsItem > button:hover {
  background-color: hsla(0,0%,100%,.02);
  background-image: linear-gradient(hsla(0,0%,100%,.05), hsla(0,0%,100%,0));
  background-clip: padding-box;
  box-shadow: 0 1px 0 hsla(0,0%,100%,.05) inset,
              0 0 1px hsla(0,0%,100%,.2) inset,
              0 0 1px hsla(0,0%,0%,.2);
  border-radius: 2px;
  color: hsla(0,0%,100%,.9);
}

.outlineItem.selected {
  background-color: hsla(0,0%,100%,.08);
  background-image: linear-gradient(hsla(0,0%,100%,.05), hsla(0,0%,100%,0));
  background-clip: padding-box;
  box-shadow: 0 1px 0 hsla(0,0%,100%,.05) inset,
              0 0 1px hsla(0,0%,100%,.1) inset,
              0 0 1px hsla(0,0%,0%,.2);
  color: hsla(0,0%,100%,1);
}

.noResults {
  font-size: 12px;
  color: hsla(0,0%,100%,.8);
  font-style: italic;
  cursor: default;
}

/* TODO: file FF bug to support ::-moz-selection:window-inactive
   so we can override the opaque grey background when the window is inactive;
   see https://bugzilla.mozilla.org/show_bug.cgi?id=706209 */
::selection { background: rgba(0,0,255,0.3); }
::-moz-selection { background: rgba(0,0,255,0.3); }

#errorWrapper {
  background: none repeat scroll 0 0 #FF5555;
  color: white;
  left: 0;
  position: absolute;
  right: 0;
  z-index: 1000;
  padding: 3px;
  font-size: 0.8em;
}
.loadingInProgress #errorWrapper {
  top: 37px;
}

#errorMessageLeft {
  float: left;
}

#errorMessageRight {
  float: right;
}

#errorMoreInfo {
  background-color: #FFFFFF;
  color: black;
  padding: 3px;
  margin: 3px;
  width: 98%;
}

.overlayButton {
  width: auto;
  margin: 3px 4px 2px 4px !important;
  padding: 2px 6px 3px 6px;
}

#overlayContainer {
  display: table;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: hsla(0,0%,0%,.2);
  z-index: 40000;
}
#overlayContainer > * {
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

#overlayContainer > .container {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

#overlayContainer > .container > .dialog {
  display: inline-block;
  padding: 15px;
  border-spacing: 4px;
  color: hsl(0,0%,85%);
  font-size: 12px;
  line-height: 14px;
  background-color: #474747; /* fallback */
  background-image: url(images/texture.png),
                    linear-gradient(hsla(0,0%,32%,.99), hsla(0,0%,27%,.95));
  box-shadow: inset 1px 0 0 hsla(0,0%,100%,.08),
              inset 0 1px 1px hsla(0,0%,0%,.15),
              inset 0 -1px 0 hsla(0,0%,100%,.05),
              0 1px 0 hsla(0,0%,0%,.15),
              0 1px 1px hsla(0,0%,0%,.1);
  border: 1px solid hsla(0,0%,0%,.5);
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}

.dialog > .row {
  display: table-row;
}

.dialog > .row > * {
  display: table-cell;
}

.dialog .toolbarField {
  margin: 5px 0;
}

.dialog .separator {
  display: block;
  margin: 4px 0 4px 0;
  height: 1px;
  width: 100%;
  background-color: hsla(0,0%,0%,.5);
  box-shadow: 0 0 0 1px hsla(0,0%,100%,.08);
}

.dialog .buttonRow {
  text-align: center;
  vertical-align: middle;
}

.dialog :link {
  color: white;
}

#passwordOverlay > .dialog {
  text-align: center;
}
#passwordOverlay .toolbarField {
  width: 200px;
}

#documentPropertiesOverlay > .dialog {
  text-align: left;
}
#documentPropertiesOverlay .row > * {
  min-width: 100px;
}
html[dir='ltr'] #documentPropertiesOverlay .row > * {
  text-align: left;
}
html[dir='rtl'] #documentPropertiesOverlay .row > * {
  text-align: right;
}
#documentPropertiesOverlay .row > span {
  width: 125px;
  word-wrap: break-word;
}
#documentPropertiesOverlay .row > p {
  max-width: 225px;
  word-wrap: break-word;
}
#documentPropertiesOverlay .buttonRow {
  margin-top: 10px;
}

.clearBoth {
  clear: both;
}

.fileInput {
  background: white;
  color: black;
  margin-top: 5px;
  visibility: hidden;
  position: fixed;
  right: 0;
  top: 0;
}

#PDFBug {
  background: none repeat scroll 0 0 white;
  border: 1px solid #666666;
  position: fixed;
  top: 32px;
  right: 0;
  bottom: 0;
  font-size: 10px;
  padding: 0;
  width: 300px;
}
#PDFBug .controls {
    background:#EEEEEE;
    border-bottom: 1px solid #666666;
    padding: 3px;
}
#PDFBug .panels {
  bottom: 0;
  left: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  right: 0;
  top: 27px;
}
#PDFBug button.active {
  font-weight: bold;
}
.debuggerShowText {
  background: none repeat scroll 0 0 yellow;
  color: blue;
}
.debuggerHideText:hover {
  background: none repeat scroll 0 0 yellow;
}
#PDFBug .stats {
  font-family: courier;
  font-size: 10px;
  white-space: pre;
}
#PDFBug .stats .title {
    font-weight: bold;
}
#PDFBug table {
  font-size: 10px;
}

#viewer.textLayer-visible .textLayer {
  opacity: 1.0;
}

#viewer.textLayer-visible .canvasWrapper {
  background-color: rgb(128,255,128);
}

#viewer.textLayer-visible .canvasWrapper canvas {
  mix-blend-mode: screen;
}

#viewer.textLayer-visible .textLayer > div {
  background-color: rgba(255, 255, 0, 0.1);
  color: black;
  border: solid 1px rgba(255, 0, 0, 0.5);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

#viewer.textLayer-hover .textLayer > div:hover {
  background-color: white;
  color: black;
}

#viewer.textLayer-shadow .textLayer > div {
  background-color: rgba(255,255,255, .6);
  color: black;
}

.grab-to-pan-grab {
  cursor: url("images/grab.cur"), move !important;
  cursor: -webkit-grab !important;
  cursor: -moz-grab !important;
  cursor: grab !important;
}
.grab-to-pan-grab *:not(input):not(textarea):not(button):not(select):not(:link) {
  cursor: inherit !important;
}
.grab-to-pan-grab:active,
.grab-to-pan-grabbing {
  cursor: url("images/grabbing.cur"), move !important;
  cursor: -webkit-grabbing !important;
  cursor: -moz-grabbing !important;
  cursor: grabbing !important;

  position: fixed;
  background: transparent;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 50000; /* should be higher than anything else in PDF.js! */
}

@page {
  margin: 0;
}

#printContainer {
  display: none;
}

@media screen and (min-resolution: 2dppx) {
  /* Rules for Retina screens */
  .toolbarButton::before {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    top: -5px;
  }

  .secondaryToolbarButton::before {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    top: -4px;
  }

  html[dir='ltr'] .toolbarButton::before,
  html[dir='rtl'] .toolbarButton::before {
    left: -1px;
  }

  html[dir='ltr'] .secondaryToolbarButton::before {
    left: -2px;
  }
  html[dir='rtl'] .secondaryToolbarButton::before {
    left: 186px;
  }

  .toolbarField.pageNumber.visiblePageIsLoading,
  #findInput[data-status="pending"] {
    background-image: url(images/loading-small@2x.png);
    background-size: 16px 17px;
  }

  .dropdownToolbarButton {
    background: url(images/toolbarButton-menuArrows@2x.png) no-repeat;
    background-size: 7px 16px;
  }

  html[dir='ltr'] .toolbarButton#sidebarToggle::before {
    content: url(images/toolbarButton-sidebarToggle@2x.png);
  }
  html[dir='rtl'] .toolbarButton#sidebarToggle::before {
    content: url(images/toolbarButton-sidebarToggle-rtl@2x.png);
  }

  html[dir='ltr'] .toolbarButton#secondaryToolbarToggle::before {
    content: url(images/toolbarButton-secondaryToolbarToggle@2x.png);
  }
  html[dir='rtl'] .toolbarButton#secondaryToolbarToggle::before {
    content: url(images/toolbarButton-secondaryToolbarToggle-rtl@2x.png);
  }

  html[dir='ltr'] .toolbarButton.findPrevious::before {
    content: url(images/findbarButton-previous@2x.png);
  }
  html[dir='rtl'] .toolbarButton.findPrevious::before {
    content: url(images/findbarButton-previous-rtl@2x.png);
  }

  html[dir='ltr'] .toolbarButton.findNext::before {
    content: url(images/findbarButton-next@2x.png);
  }
  html[dir='rtl'] .toolbarButton.findNext::before {
    content: url(images/findbarButton-next-rtl@2x.png);
  }

  html[dir='ltr'] .toolbarButton.pageUp::before {
    content: url(images/toolbarButton-pageUp@2x.png);
  }
  html[dir='rtl'] .toolbarButton.pageUp::before {
    content: url(images/toolbarButton-pageUp-rtl@2x.png);
  }

  html[dir='ltr'] .toolbarButton.pageDown::before {
    content: url(images/toolbarButton-pageDown@2x.png);
  }
  html[dir='rtl'] .toolbarButton.pageDown::before {
    content: url(images/toolbarButton-pageDown-rtl@2x.png);
  }

  .toolbarButton.zoomIn::before {
    content: url(images/toolbarButton-zoomIn@2x.png);
  }

  .toolbarButton.zoomOut::before {
    content: url(images/toolbarButton-zoomOut@2x.png);
  }

  .toolbarButton.presentationMode::before,
  .secondaryToolbarButton.presentationMode::before {
    content: url(images/toolbarButton-presentationMode@2x.png);
  }

  .toolbarButton.print::before,
  .secondaryToolbarButton.print::before {
    content: url(images/toolbarButton-print@2x.png);
  }

  .toolbarButton.openFile::before,
  .secondaryToolbarButton.openFile::before {
    content: url(images/toolbarButton-openFile@2x.png);
  }

  .toolbarButton.download::before,
  .secondaryToolbarButton.download::before {
    content: url(images/toolbarButton-download@2x.png);
  }

  .toolbarButton.bookmark::before,
  .secondaryToolbarButton.bookmark::before {
    content: url(images/toolbarButton-bookmark@2x.png);
  }

  #viewThumbnail.toolbarButton::before {
    content: url(images/toolbarButton-viewThumbnail@2x.png);
  }

  html[dir="ltr"] #viewOutline.toolbarButton::before {
    content: url(images/toolbarButton-viewOutline@2x.png);
  }
  html[dir="rtl"] #viewOutline.toolbarButton::before {
    content: url(images/toolbarButton-viewOutline-rtl@2x.png);
  }

  #viewAttachments.toolbarButton::before {
    content: url(images/toolbarButton-viewAttachments@2x.png);
  }

  #viewFind.toolbarButton::before {
    content: url(images/toolbarButton-search@2x.png);
  }

  .secondaryToolbarButton.firstPage::before {
    content: url(images/secondaryToolbarButton-firstPage@2x.png);
  }

  .secondaryToolbarButton.lastPage::before {
    content: url(images/secondaryToolbarButton-lastPage@2x.png);
  }

  .secondaryToolbarButton.rotateCcw::before {
    content: url(images/secondaryToolbarButton-rotateCcw@2x.png);
  }

  .secondaryToolbarButton.rotateCw::before {
    content: url(images/secondaryToolbarButton-rotateCw@2x.png);
  }

  .secondaryToolbarButton.handTool::before {
    content: url(images/secondaryToolbarButton-handTool@2x.png);
  }

  .secondaryToolbarButton.documentProperties::before {
    content: url(images/secondaryToolbarButton-documentProperties@2x.png);
  }

  .outlineItemToggler::before {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    top: -1px;
    content: url(images/treeitem-expanded@2x.png);
  }
  html[dir='ltr'] .outlineItemToggler.outlineItemsHidden::before {
    content: url(images/treeitem-collapsed@2x.png);
  }
  html[dir='rtl'] .outlineItemToggler.outlineItemsHidden::before {
    content: url(images/treeitem-collapsed-rtl@2x.png);
  }
  html[dir='ltr'] .outlineItemToggler::before {
    right: 0;
  }
  html[dir='rtl'] .outlineItemToggler::before {
    left: 0;
  }
}

@media print {
  /* General rules for printing. */
  body {
    background: transparent none;
  }

  /* Rules for browsers that don't support mozPrintCallback. */
  #sidebarContainer, #secondaryToolbar, .toolbar, #loadingBox, #errorWrapper, .textLayer {
    display: none;
  }
  #viewerContainer {
    overflow: visible;
  }

  #mainContainer, #viewerContainer, .page, .page canvas {
    position: static;
    padding: 0;
    margin: 0;
  }

  .page {
    float: left;
    display: none;
    border: none;
    box-shadow: none;
    background-clip: content-box;
    background-color: white;
  }

  .page[data-loaded] {
    display: block;
  }

  .fileInput {
    display: none;
  }

  /* Rules for browsers that support mozPrintCallback */
  body[data-mozPrintCallback] #outerContainer {
    display: none;
  }
  body[data-mozPrintCallback] #printContainer {
    display: block;
  }
  /* wrapper around (scaled) print canvas elements */
  #printContainer > div {
    position: relative;
    top: 0;
    left: 0;
    overflow: hidden;
  }
  #printContainer canvas {
    display: block;
  }
}

.visibleLargeView,
.visibleMediumView,
.visibleSmallView {
  display: none;
}

@media all and (max-width: 960px) {
  html[dir='ltr'] #outerContainer.sidebarMoving .outerCenter,
  html[dir='ltr'] #outerContainer.sidebarOpen .outerCenter {
    float: left;
    left: 205px;
  }
  html[dir='rtl'] #outerContainer.sidebarMoving .outerCenter,
  html[dir='rtl'] #outerContainer.sidebarOpen .outerCenter {
    float: right;
    right: 205px;
  }
}

@media all and (max-width: 900px) {
  .sidebarOpen .hiddenLargeView {
    display: none;
  }
  .sidebarOpen .visibleLargeView {
    display: inherit;
  }
}

@media all and (max-width: 860px) {
  .sidebarOpen .hiddenMediumView {
    display: none;
  }
  .sidebarOpen .visibleMediumView {
    display: inherit;
  }
}

@media all and (max-width: 770px) {
  #sidebarContainer {
    top: 32px;
    z-index: 100;
  }
  .loadingInProgress #sidebarContainer {
    top: 37px;
  }
  #sidebarContent {
    top: 32px;
    background-color: hsla(0,0%,0%,.7);
  }

  html[dir='ltr'] #outerContainer.sidebarOpen > #mainContainer {
    left: 0px;
  }
  html[dir='rtl'] #outerContainer.sidebarOpen > #mainContainer {
    right: 0px;
  }

  html[dir='ltr'] .outerCenter {
    float: left;
    left: 205px;
  }
  html[dir='rtl'] .outerCenter {
    float: right;
    right: 205px;
  }

  #outerContainer .hiddenLargeView,
  #outerContainer .hiddenMediumView {
    display: inherit;
  }
  #outerContainer .visibleLargeView,
  #outerContainer .visibleMediumView {
    display: none;
  }
}

@media all and (max-width: 700px) {
  #outerContainer .hiddenLargeView {
    display: none;
  }
  #outerContainer .visibleLargeView {
    display: inherit;
  }
}

@media all and (max-width: 660px) {
  #outerContainer .hiddenMediumView {
    display: none;
  }
  #outerContainer .visibleMediumView {
    display: inherit;
  }
}

@media all and (max-width: 600px) {
  .hiddenSmallView {
    display: none;
  }
  .visibleSmallView {
    display: inherit;
  }
  html[dir='ltr'] #outerContainer.sidebarMoving .outerCenter,
  html[dir='ltr'] #outerContainer.sidebarOpen .outerCenter,
  html[dir='ltr'] .outerCenter {
    left: 156px;
  }
  html[dir='rtl'] #outerContainer.sidebarMoving .outerCenter,
  html[dir='rtl'] #outerContainer.sidebarOpen .outerCenter,
  html[dir='rtl'] .outerCenter {
    right: 156px;
  }
  .toolbarButtonSpacer {
    width: 0;
  }
}

@media all and (max-width: 510px) {
  #scaleSelectContainer, #pageNumberLabel {
    display: none;
  }
}
