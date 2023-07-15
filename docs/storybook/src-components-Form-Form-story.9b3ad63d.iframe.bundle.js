(self.webpackChunkanique=self.webpackChunkanique||[]).push([[329],{"./src/lib/src/components/Form/Form.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicForm:()=>BasicForm,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./src/lib/src/components/Form/Form.tsx")),___WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/lib/src/types/index.ts"),___WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/lib/src/components/Button/Button.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Form",component:___WEBPACK_IMPORTED_MODULE_3__.l},Template=({onSubmit,...args})=>{const[formData,setFormData]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({firstname:"",lastname:"",email:""}),handleChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>{const{name,value}=e.target;setFormData((oldData=>({...oldData,[name]:value})))}),[formData]),handleSubmit=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>{setTimeout((()=>{alert(`${JSON.stringify(formData,null,2)}`)}),500)}),[formData]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(___WEBPACK_IMPORTED_MODULE_3__.l,{...args,onSubmit:onSubmit||handleSubmit,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.Textfield,{name:"firstname",label:"First Name",value:formData.firstname,onChange:handleChange}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.Textfield,{name:"lastname",label:"Last Name",value:formData.lastname,onChange:handleChange}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.Textfield,{name:"email",label:"Email",type:"email",value:formData.email,onChange:handleChange}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_5__.z,{primary:!0,submit:!0,children:"Submit"})]})};Template.displayName="Template";const BasicForm=Template.bind({});BasicForm.args={name:"subscribe-form",autoComplete:"off"},BasicForm.parameters={...BasicForm.parameters,docs:{...BasicForm.parameters?.docs,source:{originalSource:'({\n  onSubmit,\n  ...args\n}) => {\n  const [formData, setFormData] = useState({\n    firstname: \'\',\n    lastname: \'\',\n    email: \'\'\n  });\n  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {\n    const {\n      name,\n      value\n    } = e.target;\n    setFormData(oldData => ({\n      ...oldData,\n      [name]: value\n    }));\n  }, [formData]);\n  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {\n    setTimeout(() => {\n      alert(`${JSON.stringify(formData, null, 2)}`);\n    }, 500);\n  }, [formData]);\n  return <Form {...args} onSubmit={onSubmit || handleSubmit}>\r\n      <Textfield name="firstname" label="First Name" value={formData.firstname} onChange={handleChange} />\r\n      <Textfield name="lastname" label="Last Name" value={formData.lastname} onChange={handleChange} />\r\n      <Textfield name="email" label="Email" type="email" value={formData.email} onChange={handleChange} />\r\n      <Button primary submit>\r\n        Submit\r\n      </Button>\r\n    </Form>;\n}',...BasicForm.parameters?.docs?.source}}};const __namedExportsOrder=["BasicForm"]},"./src/lib/src/components/Form/Form.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>Form});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_utilities__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/lib/src/utilities/generateUniqueID.ts"),_utilities__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/lib/src/utilities/useTestId.ts"),_Invisible__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/lib/src/components/Invisible/Invisible.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const UrsaForm=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((({id,name,className,children,autoComplete,acceptCharset,encType,target,action,noValidate,submitOnEnter,onSubmit},ref)=>{const _id=id||(0,_utilities__WEBPACK_IMPORTED_MODULE_3__.f)("Ursa-Form"),testid=(0,_utilities__WEBPACK_IMPORTED_MODULE_4__.I)("test-form"),handleSubmit=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>{e.preventDefault(),onSubmit(e)}),[onSubmit]),autoCompleteValue=autoComplete?"off"===autoComplete?"off":"on":void 0,submitButton=submitOnEnter?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Invisible__WEBPACK_IMPORTED_MODULE_5__.u,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{id:`${_id}-ImplicitSubmit`,type:"submit",tabIndex:-1,"aria-hidden":"true",children:"Submit"})}):void 0;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("form",{id:_id,name,className:`Ursa-Form ${className||""}`,ref,autoComplete:autoCompleteValue,encType,action,target,acceptCharset,noValidate,onSubmit:handleSubmit,...testid,children:[submitButton,children]})})),Form=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.Z)(UrsaForm)((({theme})=>"\n    \n  "))},"./src/lib/src/types/BaseButton.ts":()=>{},"./src/lib/src/types/IconSource.ts":()=>{},"./src/lib/src/types/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _BaseButton__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/lib/src/types/BaseButton.ts");__webpack_require__.o(_BaseButton__WEBPACK_IMPORTED_MODULE_0__,"Textfield")&&__webpack_require__.d(__webpack_exports__,{Textfield:function(){return _BaseButton__WEBPACK_IMPORTED_MODULE_0__.Textfield}});var _IconSource__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/lib/src/types/IconSource.ts");__webpack_require__.o(_IconSource__WEBPACK_IMPORTED_MODULE_1__,"Textfield")&&__webpack_require__.d(__webpack_exports__,{Textfield:function(){return _IconSource__WEBPACK_IMPORTED_MODULE_1__.Textfield}})}}]);