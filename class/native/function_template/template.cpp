#include <node.h>

namespace func_template {
    using v8::HandleScope;
    using v8::FunctionTemplate;
    using v8::FunctionCallbackInfo;
    using v8::Function;
    using v8::Isolate;
    using v8::Local;
    using v8::Object;
    using v8::String;
    using v8::Value;

    void Methon(const FunctionCallbackInfo<Value>& args) {
        Isolate* isolate = args.GetIsolate();
        args.GetReturnValue().Set(String::NewFromUtf8(isolate, "this is template function"));
    }

    void init(Local<Object> exports) {
        Isolate* isolate = Isolate::GetCurrent();
        HandleScope scope(isolate);
        Local<FunctionTemplate> t = FunctionTemplate::New(isolate, Methon);
        Local<Function> fn = t->GetFunction();
        Local<String> name = String::NewFromUtf8(isolate, "functionCreateByTemplate");
        fn->SetName(name);
        exports->Set(name, fn);
    }

    NODE_MODULE(_template, init);
}
