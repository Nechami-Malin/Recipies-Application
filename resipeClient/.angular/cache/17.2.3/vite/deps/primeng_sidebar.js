import {
  BaseIcon,
  DomHandler,
  PrimeNGConfig,
  PrimeTemplate,
  Ripple,
  RippleModule,
  SharedModule,
  zindexutils
} from "./chunk-ZE4MHP27.js";
import {
  animate,
  animation,
  style,
  transition,
  trigger,
  useAnimation
} from "./chunk-MMO5GVGQ.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-F5OMBA3H.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgModule,
  Output,
  Renderer2,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction6,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor
} from "./chunk-G24NECQG.js";
import "./chunk-WKYGNSYM.js";

// node_modules/primeng/fesm2022/primeng-icons-times.mjs
var TimesIcon = class _TimesIcon extends BaseIcon {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵTimesIcon_BaseFactory;
    return function TimesIcon_Factory(t) {
      return (ɵTimesIcon_BaseFactory || (ɵTimesIcon_BaseFactory = ɵɵgetInheritedFactory(_TimesIcon)))(t || _TimesIcon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _TimesIcon,
    selectors: [["TimesIcon"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z", "fill", "currentColor"]],
    template: function TimesIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelement(1, "path", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.getClassNames());
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimesIcon, [{
    type: Component,
    args: [{
      selector: "TimesIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-sidebar.mjs
function Sidebar_div_0_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Sidebar_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Sidebar_div_0_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.headlessTemplate);
  }
}
function Sidebar_div_0_ng_template_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Sidebar_div_0_ng_template_3_button_2_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "TimesIcon", 13);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-sidebar-close-icon");
    ɵɵattribute("data-pc-section", "closeicon");
  }
}
function Sidebar_div_0_ng_template_3_button_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Sidebar_div_0_ng_template_3_button_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Sidebar_div_0_ng_template_3_button_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Sidebar_div_0_ng_template_3_button_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 14);
    ɵɵtemplate(1, Sidebar_div_0_ng_template_3_button_2_span_2_1_Template, 1, 0, null, 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(4);
    ɵɵattribute("data-pc-section", "closeicon");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r11.closeIconTemplate);
  }
}
function Sidebar_div_0_ng_template_3_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10);
    ɵɵlistener("click", function Sidebar_div_0_ng_template_3_button_2_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r15);
      const ctx_r14 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r14.close($event));
    })("keydown.enter", function Sidebar_div_0_ng_template_3_button_2_Template_button_keydown_enter_0_listener($event) {
      ɵɵrestoreView(_r15);
      const ctx_r16 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r16.close($event));
    });
    ɵɵtemplate(1, Sidebar_div_0_ng_template_3_button_2_TimesIcon_1_Template, 1, 2, "TimesIcon", 11)(2, Sidebar_div_0_ng_template_3_button_2_span_2_Template, 2, 2, "span", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(3);
    ɵɵattribute("aria-label", ctx_r7.ariaCloseLabel)("data-pc-section", "closebutton")("data-pc-group-section", "iconcontainer");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r7.closeIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r7.closeIconTemplate);
  }
}
function Sidebar_div_0_ng_template_3_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Sidebar_div_0_ng_template_3_ng_container_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Sidebar_div_0_ng_template_3_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 15);
    ɵɵtemplate(2, Sidebar_div_0_ng_template_3_ng_container_6_ng_container_2_Template, 1, 0, "ng-container", 5);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "footer");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r9.footerTemplate);
  }
}
function Sidebar_div_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, Sidebar_div_0_ng_template_3_ng_container_1_Template, 1, 0, "ng-container", 5)(2, Sidebar_div_0_ng_template_3_button_2_Template, 3, 5, "button", 7);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 8);
    ɵɵprojection(4);
    ɵɵtemplate(5, Sidebar_div_0_ng_template_3_ng_container_5_Template, 1, 0, "ng-container", 5);
    ɵɵelementEnd();
    ɵɵtemplate(6, Sidebar_div_0_ng_template_3_ng_container_6_Template, 3, 2, "ng-container", 9);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "header");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.headerTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.showCloseIcon);
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "content");
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r3.contentTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.footerTemplate);
  }
}
var _c0 = (a1, a2, a3, a4, a5, a6) => ({
  "p-sidebar": true,
  "p-sidebar-active": a1,
  "p-sidebar-left": a2,
  "p-sidebar-right": a3,
  "p-sidebar-top": a4,
  "p-sidebar-bottom": a5,
  "p-sidebar-full": a6
});
var _c1 = (a0, a1) => ({
  transform: a0,
  transition: a1
});
var _c2 = (a1) => ({
  value: "visible",
  params: a1
});
function Sidebar_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1, 2);
    ɵɵlistener("@panelState.start", function Sidebar_div_0_Template_div_animation_panelState_start_0_listener($event) {
      ɵɵrestoreView(_r19);
      const ctx_r18 = ɵɵnextContext();
      return ɵɵresetView(ctx_r18.onAnimationStart($event));
    })("@panelState.done", function Sidebar_div_0_Template_div_animation_panelState_done_0_listener($event) {
      ɵɵrestoreView(_r19);
      const ctx_r20 = ɵɵnextContext();
      return ɵɵresetView(ctx_r20.onAnimationEnd($event));
    })("keydown", function Sidebar_div_0_Template_div_keydown_0_listener($event) {
      ɵɵrestoreView(_r19);
      const ctx_r21 = ɵɵnextContext();
      return ɵɵresetView(ctx_r21.onKeyDown($event));
    });
    ɵɵtemplate(2, Sidebar_div_0_ng_container_2_Template, 2, 1, "ng-container", 3)(3, Sidebar_div_0_ng_template_3_Template, 7, 6, "ng-template", null, 4, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const _r4 = ɵɵreference(4);
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.styleClass);
    ɵɵproperty("ngClass", ɵɵpureFunction6(9, _c0, ctx_r0.visible, ctx_r0.position === "left" && !ctx_r0.fullScreen, ctx_r0.position === "right" && !ctx_r0.fullScreen, ctx_r0.position === "top" && !ctx_r0.fullScreen, ctx_r0.position === "bottom" && !ctx_r0.fullScreen, ctx_r0.fullScreen))("@panelState", ɵɵpureFunction1(19, _c2, ɵɵpureFunction2(16, _c1, ctx_r0.transformOptions, ctx_r0.transitionOptions)))("ngStyle", ctx_r0.style);
    ɵɵattribute("data-pc-name", "sidebar")("data-pc-section", "root");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.headlessTemplate)("ngIfElse", _r4);
  }
}
var _c3 = ["*"];
var showAnimation = animation([style({
  transform: "{{transform}}",
  opacity: 0
}), animate("{{transition}}")]);
var hideAnimation = animation([animate("{{transition}}", style({
  transform: "{{transform}}",
  opacity: 0
}))]);
var Sidebar = class _Sidebar {
  document;
  el;
  renderer;
  cd;
  config;
  /**
   *  Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Whether to block scrolling of the document when sidebar is active.
   * @group Props
   */
  blockScroll = false;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Aria label of the close icon.
   * @group Props
   */
  ariaCloseLabel;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * Whether an overlay mask is displayed behind the sidebar.
   * @group Props
   */
  modal = true;
  /**
   * Whether to dismiss sidebar on click of the mask.
   * @group Props
   */
  dismissible = true;
  /**
   * Whether to display the close icon.
   * @group Props
   */
  showCloseIcon = true;
  /**
   * Specifies if pressing escape key should hide the sidebar.
   * @group Props
   */
  closeOnEscape = true;
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions = "150ms cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Specifies the visibility of the dialog.
   * @group Props
   */
  get visible() {
    return this._visible;
  }
  set visible(val) {
    this._visible = val;
  }
  /**
   * Specifies the position of the sidebar, valid values are "left", "right", "bottom" and "top".
   * @group Props
   */
  get position() {
    return this._position;
  }
  set position(value) {
    this._position = value;
    switch (value) {
      case "left":
        this.transformOptions = "translate3d(-100%, 0px, 0px)";
        break;
      case "right":
        this.transformOptions = "translate3d(100%, 0px, 0px)";
        break;
      case "bottom":
        this.transformOptions = "translate3d(0px, 100%, 0px)";
        break;
      case "top":
        this.transformOptions = "translate3d(0px, -100%, 0px)";
        break;
    }
  }
  /**
   * Adds a close icon to the header to hide the dialog.
   * @group Props
   */
  get fullScreen() {
    return this._fullScreen;
  }
  set fullScreen(value) {
    this._fullScreen = value;
    if (value)
      this.transformOptions = "none";
  }
  templates;
  /**
   * Callback to invoke when dialog is shown.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke when dialog is hidden.
   * @group Emits
   */
  onHide = new EventEmitter();
  /**
   * Callback to invoke when dialog visibility is changed.
   * @param {boolean} value - Visible value.
   * @group Emits
   */
  visibleChange = new EventEmitter();
  initialized;
  _visible;
  _position = "left";
  _fullScreen = false;
  container;
  transformOptions = "translate3d(-100%, 0px, 0px)";
  mask;
  maskClickListener;
  documentEscapeListener;
  animationEndListener;
  contentTemplate;
  headerTemplate;
  footerTemplate;
  closeIconTemplate;
  headlessTemplate;
  constructor(document, el, renderer, cd, config) {
    this.document = document;
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.config = config;
  }
  ngAfterViewInit() {
    this.initialized = true;
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this.contentTemplate = item.template;
          break;
        case "header":
          this.headerTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        case "closeicon":
          this.closeIconTemplate = item.template;
          break;
        case "headless":
          this.headlessTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  onKeyDown(event) {
    if (event.code === "Escape") {
      this.hide(false);
    }
  }
  show() {
    if (this.autoZIndex) {
      zindexutils.set("modal", this.container, this.baseZIndex || this.config.zIndex.modal);
    }
    if (this.modal) {
      this.enableModality();
    }
    this.onShow.emit({});
    this.visibleChange.emit(true);
  }
  hide(emit = true) {
    if (emit) {
      this.onHide.emit({});
    }
    if (this.modal) {
      this.disableModality();
    }
  }
  close(event) {
    this.hide();
    this.visibleChange.emit(false);
    event.preventDefault();
  }
  enableModality() {
    if (!this.mask) {
      this.mask = this.renderer.createElement("div");
      this.renderer.setStyle(this.mask, "zIndex", String(parseInt(this.container.style.zIndex) - 1));
      DomHandler.addMultipleClasses(this.mask, "p-component-overlay p-sidebar-mask p-component-overlay p-component-overlay-enter");
      if (this.dismissible) {
        this.maskClickListener = this.renderer.listen(this.mask, "click", (event) => {
          if (this.dismissible) {
            this.close(event);
          }
        });
      }
      this.renderer.appendChild(this.document.body, this.mask);
      if (this.blockScroll) {
        DomHandler.blockBodyScroll();
      }
    }
  }
  disableModality() {
    if (this.mask) {
      DomHandler.addClass(this.mask, "p-component-overlay-leave");
      this.animationEndListener = this.renderer.listen(this.mask, "animationend", this.destroyModal.bind(this));
    }
  }
  destroyModal() {
    this.unbindMaskClickListener();
    if (this.mask) {
      this.renderer.removeChild(this.document.body, this.mask);
    }
    if (this.blockScroll) {
      DomHandler.unblockBodyScroll();
    }
    this.unbindAnimationEndListener();
    this.mask = null;
  }
  onAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        this.container = event.element;
        this.appendContainer();
        this.show();
        if (this.closeOnEscape) {
          this.bindDocumentEscapeListener();
        }
        break;
    }
  }
  onAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        this.hide(false);
        zindexutils.clear(this.container);
        this.unbindGlobalListeners();
        break;
    }
  }
  appendContainer() {
    if (this.appendTo) {
      if (this.appendTo === "body")
        this.renderer.appendChild(this.document.body, this.container);
      else
        DomHandler.appendChild(this.container, this.appendTo);
    }
  }
  bindDocumentEscapeListener() {
    const documentTarget = this.el ? this.el.nativeElement.ownerDocument : this.document;
    this.documentEscapeListener = this.renderer.listen(documentTarget, "keydown", (event) => {
      if (event.which == 27) {
        if (parseInt(this.container.style.zIndex) === zindexutils.get(this.container)) {
          this.close(event);
        }
      }
    });
  }
  unbindDocumentEscapeListener() {
    if (this.documentEscapeListener) {
      this.documentEscapeListener();
      this.documentEscapeListener = null;
    }
  }
  unbindMaskClickListener() {
    if (this.maskClickListener) {
      this.maskClickListener();
      this.maskClickListener = null;
    }
  }
  unbindGlobalListeners() {
    this.unbindMaskClickListener();
    this.unbindDocumentEscapeListener();
  }
  unbindAnimationEndListener() {
    if (this.animationEndListener && this.mask) {
      this.animationEndListener();
      this.animationEndListener = null;
    }
  }
  ngOnDestroy() {
    this.initialized = false;
    if (this.visible && this.modal) {
      this.destroyModal();
    }
    if (this.appendTo && this.container) {
      this.renderer.appendChild(this.el.nativeElement, this.container);
    }
    if (this.container && this.autoZIndex) {
      zindexutils.clear(this.container);
    }
    this.container = null;
    this.unbindGlobalListeners();
    this.unbindAnimationEndListener();
  }
  static ɵfac = function Sidebar_Factory(t) {
    return new (t || _Sidebar)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PrimeNGConfig));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Sidebar,
    selectors: [["p-sidebar"]],
    contentQueries: function Sidebar_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      appendTo: "appendTo",
      blockScroll: "blockScroll",
      style: "style",
      styleClass: "styleClass",
      ariaCloseLabel: "ariaCloseLabel",
      autoZIndex: "autoZIndex",
      baseZIndex: "baseZIndex",
      modal: "modal",
      dismissible: "dismissible",
      showCloseIcon: "showCloseIcon",
      closeOnEscape: "closeOnEscape",
      transitionOptions: "transitionOptions",
      visible: "visible",
      position: "position",
      fullScreen: "fullScreen"
    },
    outputs: {
      onShow: "onShow",
      onHide: "onHide",
      visibleChange: "visibleChange"
    },
    ngContentSelectors: _c3,
    decls: 1,
    vars: 1,
    consts: [["role", "complementary", 3, "ngClass", "ngStyle", "class", "keydown", 4, "ngIf"], ["role", "complementary", 3, "ngClass", "ngStyle", "keydown"], ["container", ""], [4, "ngIf", "ngIfElse"], ["notHeadless", ""], [4, "ngTemplateOutlet"], [1, "p-sidebar-header"], ["type", "button", "class", "p-sidebar-close p-sidebar-icon p-link", "pRipple", "", 3, "click", "keydown.enter", 4, "ngIf"], [1, "p-sidebar-content"], [4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-sidebar-close", "p-sidebar-icon", "p-link", 3, "click", "keydown.enter"], [3, "styleClass", 4, "ngIf"], ["class", "p-sidebar-close-icon", 4, "ngIf"], [3, "styleClass"], [1, "p-sidebar-close-icon"], [1, "p-sidebar-footer"]],
    template: function Sidebar_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, Sidebar_div_0_Template, 5, 21, "div", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.visible);
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, Ripple, TimesIcon],
    styles: ["@layer primeng{.p-sidebar{position:fixed;transition:transform .3s;display:flex;flex-direction:column}.p-sidebar-content{position:relative;overflow-y:auto;flex-grow:1}.p-sidebar-header{display:flex;align-items:center}.p-sidebar-footer{margin-top:auto}.p-sidebar-icon{display:flex;align-items:center;justify-content:center;margin-left:auto}.p-sidebar-left{top:0;left:0;width:20rem;height:100%}.p-sidebar-right{top:0;right:0;width:20rem;height:100%}.p-sidebar-top{top:0;left:0;width:100%;height:10rem}.p-sidebar-bottom{bottom:0;left:0;width:100%;height:10rem}.p-sidebar-full{width:100%;height:100%;top:0;left:0;-webkit-transition:none;transition:none}.p-sidebar-left.p-sidebar-sm,.p-sidebar-right.p-sidebar-sm{width:20rem}.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-md{width:40rem}.p-sidebar-left.p-sidebar-lg,.p-sidebar-right.p-sidebar-lg{width:60rem}.p-sidebar-top.p-sidebar-sm,.p-sidebar-bottom.p-sidebar-sm{height:10rem}.p-sidebar-top.p-sidebar-md,.p-sidebar-bottom.p-sidebar-md{height:20rem}.p-sidebar-top.p-sidebar-lg,.p-sidebar-bottom.p-sidebar-lg{height:30rem}@media screen and (max-width: 64em){.p-sidebar-left.p-sidebar-lg,.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-lg,.p-sidebar-right.p-sidebar-md{width:20rem}}}\n"],
    encapsulation: 2,
    data: {
      animation: [trigger("panelState", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Sidebar, [{
    type: Component,
    args: [{
      selector: "p-sidebar",
      template: `
        <div
            #container
            [ngClass]="{
                'p-sidebar': true,
                'p-sidebar-active': visible,
                'p-sidebar-left': position === 'left' && !fullScreen,
                'p-sidebar-right': position === 'right' && !fullScreen,
                'p-sidebar-top': position === 'top' && !fullScreen,
                'p-sidebar-bottom': position === 'bottom' && !fullScreen,
                'p-sidebar-full': fullScreen
            }"
            *ngIf="visible"
            [@panelState]="{ value: 'visible', params: { transform: transformOptions, transition: transitionOptions } }"
            (@panelState.start)="onAnimationStart($event)"
            (@panelState.done)="onAnimationEnd($event)"
            [ngStyle]="style"
            [class]="styleClass"
            role="complementary"
            [attr.data-pc-name]="'sidebar'"
            [attr.data-pc-section]="'root'"
            (keydown)="onKeyDown($event)"
        >
            <ng-container *ngIf="headlessTemplate; else notHeadless">
                <ng-container *ngTemplateOutlet="headlessTemplate"></ng-container>
            </ng-container>
            <ng-template #notHeadless>
                <div class="p-sidebar-header" [attr.data-pc-section]="'header'">
                    <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                    <button
                        type="button"
                        class="p-sidebar-close p-sidebar-icon p-link"
                        (click)="close($event)"
                        (keydown.enter)="close($event)"
                        [attr.aria-label]="ariaCloseLabel"
                        *ngIf="showCloseIcon"
                        pRipple
                        [attr.data-pc-section]="'closebutton'"
                        [attr.data-pc-group-section]="'iconcontainer'"
                    >
                        <TimesIcon *ngIf="!closeIconTemplate" [styleClass]="'p-sidebar-close-icon'" [attr.data-pc-section]="'closeicon'" />
                        <span *ngIf="closeIconTemplate" class="p-sidebar-close-icon" [attr.data-pc-section]="'closeicon'">
                            <ng-template *ngTemplateOutlet="closeIconTemplate"></ng-template>
                        </span>
                    </button>
                </div>
                <div class="p-sidebar-content" [attr.data-pc-section]="'content'">
                    <ng-content></ng-content>
                    <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                </div>
                <ng-container *ngIf="footerTemplate">
                    <div class="p-sidebar-footer" [attr.data-pc-section]="'footer'">
                        <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                    </div>
                </ng-container>
            </ng-template>
        </div>
    `,
      animations: [trigger("panelState", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-sidebar{position:fixed;transition:transform .3s;display:flex;flex-direction:column}.p-sidebar-content{position:relative;overflow-y:auto;flex-grow:1}.p-sidebar-header{display:flex;align-items:center}.p-sidebar-footer{margin-top:auto}.p-sidebar-icon{display:flex;align-items:center;justify-content:center;margin-left:auto}.p-sidebar-left{top:0;left:0;width:20rem;height:100%}.p-sidebar-right{top:0;right:0;width:20rem;height:100%}.p-sidebar-top{top:0;left:0;width:100%;height:10rem}.p-sidebar-bottom{bottom:0;left:0;width:100%;height:10rem}.p-sidebar-full{width:100%;height:100%;top:0;left:0;-webkit-transition:none;transition:none}.p-sidebar-left.p-sidebar-sm,.p-sidebar-right.p-sidebar-sm{width:20rem}.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-md{width:40rem}.p-sidebar-left.p-sidebar-lg,.p-sidebar-right.p-sidebar-lg{width:60rem}.p-sidebar-top.p-sidebar-sm,.p-sidebar-bottom.p-sidebar-sm{height:10rem}.p-sidebar-top.p-sidebar-md,.p-sidebar-bottom.p-sidebar-md{height:20rem}.p-sidebar-top.p-sidebar-lg,.p-sidebar-bottom.p-sidebar-lg{height:30rem}@media screen and (max-width: 64em){.p-sidebar-left.p-sidebar-lg,.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-lg,.p-sidebar-right.p-sidebar-md{width:20rem}}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: PrimeNGConfig
  }], {
    appendTo: [{
      type: Input
    }],
    blockScroll: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    ariaCloseLabel: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input
    }],
    baseZIndex: [{
      type: Input
    }],
    modal: [{
      type: Input
    }],
    dismissible: [{
      type: Input
    }],
    showCloseIcon: [{
      type: Input
    }],
    closeOnEscape: [{
      type: Input
    }],
    transitionOptions: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    fullScreen: [{
      type: Input
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    visibleChange: [{
      type: Output
    }]
  });
})();
var SidebarModule = class _SidebarModule {
  static ɵfac = function SidebarModule_Factory(t) {
    return new (t || _SidebarModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _SidebarModule,
    declarations: [Sidebar],
    imports: [CommonModule, RippleModule, SharedModule, TimesIcon],
    exports: [Sidebar, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, RippleModule, SharedModule, TimesIcon, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RippleModule, SharedModule, TimesIcon],
      exports: [Sidebar, SharedModule],
      declarations: [Sidebar]
    }]
  }], null, null);
})();
export {
  Sidebar,
  SidebarModule
};
//# sourceMappingURL=primeng_sidebar.js.map
