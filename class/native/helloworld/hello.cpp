#include <node.h>

namespace hello {

    void Hello (const v8::FunctionCallbackInfo<v8::Value>& args) {
        v8::Isolate* isolate = args.GetIsolate();
        v8::Local<v8::String> name = v8::Local<v8::String>::Cast(args[0]);
        args.GetReturnValue().Set(v8::String::NewFromUtf8(isolate, "world"));
    }

    void init(v8::Local<v8::Object> exports) {
        NODE_SET_METHOD(exports, "hello", Hello);
    }

    NODE_MODULE(addon, init);
}
