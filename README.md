# node-red-ai-toolkit

a collection of Node-RED nodes and flows for interactive low-code development of
applications using AI technologies - free of charge and even for beginners or 
casual programmers

> **Nota bene**: this toolkit is currently under active development. After the first hectic "quick preview" for the Backdrop Builders Contest, development is now back on the usual, more careful path. Please be patient until around mid-December before a practically usable version is released

## Installation ##

t.b.w.

## Nodes and Interfaces ##

The toolkit currently consists of the following nodes:

* **configure_toolkit** - configures the toolkit and its nodes
* **list_configuration** - reveals the current toolkit configuration<br>&nbsp;<br>
* **check_for_toolkit_updates** - checks for updates of this toolkit
* **check_for_model_updates** - checks for updates for the set of known AI models<br>&nbsp;<br>
* **update_known_models** - updates the set of known AI models
* **list_known_models** - lists all known models and their details
* **list_available_models** - lists all already downloaded models
* **list_pending_models** - lists all models currently being downloaded
* **learn_model** - adds a given model to the set of known ones (or overwrites an existing one)
* **unlearn_model** - removes a given model from the set of known ones<br>&nbsp;<br>
* **download_file** - downloads a given file (and sends progress reports)
* **cancel_download** - cancels an ongoing download<br>&nbsp;<br>
* **format_prompt** - formats a prompt for a given model from a given list of messages<br>&nbsp;<br>
* **complete_text** - performs a text completion
* **complete_chat** - performs a message list completion
* **tokenize_text** - tokenizes a given text
* **calculate_embedding** - calculates the embedding vector for a given text<br>&nbsp;<br>
* **split_text** - splits a long text into chunks suitable for a given model
* **assemble_text** - reassembles a split text (e.g., after chunk-wise processing)<br>&nbsp;<br>
* **summarize_text** - summarizes a given text<br>&nbsp;<br>
* **[try_to_]extract_search_string_from_text** - constructs a search engine prompt from a given text
* **[try_to_]extract_decision_from_text** - runs a "text completion" with the possible results `yes` or `no` (or `unknown`)
* **[try_to_]extract_list_from_text** - runs a "text completion" and returns a newline-separated list of strings
* **[try_to_]extract_json_list_from_text** - runs a "text completion" and returns a list of JavaScript strings in JSON format
* **[try_to_]extract_response_from_text** - runs a "text completion" with a request that is applied to a given text<br>&nbsp;<br>
* **detect_language** - tries to detect the language of a given text
* **translate_language** - translates a given text from one language into another<br>&nbsp;<br>
* **generate_function** - generates a (JavaScript) function
* **evaluate_function** - runs a given (JavaScript) function in a sandbox<br>&nbsp;<br>
* **load_key_store** - reads a complete key-value store collection from the file system
* **patch_key_store** - writes a given key-value store collection entry to the file system
* **save_key_store** - writes a complete key-value store collection to the file system
* **list_in_key_store** - lists all collections (or the keys of a given collection) in the key-value store
* **get_from_key_store** - reads a given collection entry from the key-value store
* **put_to_key_store** - writes a given collection entry to the key-value store
* **find_in_key_store** - performs a full-text search over a given collection in the key-value store
* **remove_from_key_store** - removes a given collection entry (or a whole collection) from the key-value store<br>&nbsp;<br>
* **load_vector_store** - reads a complete vector store collection from the file system
* **patch_vector_store** - writes a given vector store collection entry to the file system
* **save_vector_store** - writes a complete vector store collection to the file system
* **list_in_vector_store** - lists all collections (or the keys of a given collection) in the vector store
* **get_from_vector_store** - reads a given collection entry from the vector store
* **put_to_vector_store** - writes a given collection entry to the vector store
* **find_in_vector_store** - performs a full-text search over a given collection in the vector store
* **locate_in_vector_store** - uses "cosine similarity" to locate one or multiple entries close to a given embedding vector in the vector store
* **remove_from_vector_store** - removes a given collection entry (or a whole collection) from the vector store<br>&nbsp;<br>
* **send_ui_reset** - sends a "reset" request (opt. providing explicit default settings) to the UI
* **send_ui_state** - sends an application-specific state to the UI
* **send_ui_data** - sends application-specific data to the UI
* **send_ui_known_model_list** - sends a list of all currently known models to the UI
* **send_ui_available_model_list** - sends a list of all currently available models to the UI
* **send_ui_download_progress** - sends a progress report for a given file download
* **send_ui_notice** - sends a "notice" to the UI (which may be shown as a "toast" or within a notice bar)
* **send_ui_message_list** - sends a complete list of messages to the UI
* **send_ui_progress** - sends a (text or chat) completion progress report to the UI
* **send_ui_data_request** - sends a request for additional input data to the UI<br>&nbsp;<br>
* **send_ui_response** - sends the final output of a (text or chat) completion to the UI
* **process_ui_model_choice** - processes an incoming model choice from the UI
* **process_ui_download_continuation** - processes an incoming file download continuation request from the UI
* **process_ui_download_cancellation** - processes an incoming file download cancellation request from the UI
* **process_ui_data_response** - processes an incoming reponse to a previously sent enquiry for additional information
* **process_ui_request** - processes an incoming (text or chat) completion  request from the UI
* **process_ui_cancellation** - processes an incoming completion cancellation request from the UI

### Configuration- and Resource-related Nodes ###

#### configure_toolkit ####

This node can be used to configure the Node-RED AI Toolkit according to your specific needs. Uusually, it is invoked upon node deployment (or at server startup) and then never used again

(t.b.w.)

#### list_configuration ####

returns a set of all configuration settings

(t.b.w.)

#### check_for_toolkit_updates ####

starts a REST request against this repository to check whether there is a new version of this toolkit. Right now, there is no possibility to automatically update the nodes in a flow from within Node-RED - thus, your application should just display a notice and let the user replace the existing toolkit flow with a new one when necessary.

(t.b.w.)

#### check_for_model_updates ####

starts a REST request against this repository to check whether there is a new version of the "official" 
list of "known" AI models. If so, you may use the node `update_known_models` to download the new list and store it locally in your configured `ModelFolder`.

(t.b.w.)

#### update_known_models ####

starts a REST request against this repository to download the current list of "officially known" AI models and store it locally in your configured `ModelFolder`.

(t.b.w.)

#### list_known_models ####

constructs a list of all currently "known" AI models (including official ones from this repository and locally taught models) and their characteristics (such as the program required for text completion, the recommended prompt structure and the maximal context length).

(t.b.w.)

#### list_available_models ####

constructs a list of all currently installed AI models (together with their characteristics as stored in the model set).

(t.b.w.)

#### list_pending_models ####

constructs a list of all AI models which are currently being downloaded (together with their download progress).

(t.b.w.)

#### learn_model ####

adds a given model to the local set of "known" AI models. You may either add a new model or change the characteristics of an already existing one.

(t.b.w.)

#### unlearn_model ####

removes a given model to the local set of "known" AI models. You may remove locally "taught" models as well as "officially known" ones. It is safe to remove a non-existent model.

(t.b.w.)

#### download_file ####

starts downloading a file from a given URL into a gien target folder. It is forbidden to download a file which is already being downloaded - unless the download was interrupted for any reason (such as a server or network failure) in which case the toolkit tries to resume the download (or, if that is not supported by the server, to restart it)

(t.b.w.)

#### cancel_download ####

cancels an ongoing file download and removes what has been downloaded before. Cancelling an already completed download is forbidden

(t.b.w.)

### AI-related Nodes ###

The following nodes are directly related to AI models and their usage

#### format_prompt ####

takes a list of (properly constructed) messages and creates a "prompt" for a given AI model. This prompt may then by sent to a `complete_text` node.

(t.b.w.)

#### complete_text ####

takes a given text prompt and runs a text completion using a given model with given settings.

(t.b.w.)

#### complete_chat ####

takes a list of (properly constructed) messages, converts them into a prompt and runs a text completion using a given model with given settings. Basically, this node is just a concatenation of `format_prompt` and `complete_text`.

(t.b.w.)

#### tokenize_text ####

tokenizes a given text using a given model, producing a list of tokens given by their internal code and the corresponding (sequence of) characters.

(t.b.w.)

#### calculate_embedding ####

calculates the embedding vector for a given text using a given model. This vector may then be used, e.g., as an index of some content in a vector database which may then be found by a "similarity search".

(t.b.w.)

#### split_text ####

takes a given text and tries to split it into "chunks" (short enough to be processed by a given AI model) in an "intelligent" way, i.e., without splitting paragraphs, sentences or words. This split requires the given text to be "tokenized" unless the list of tokens for the given text exists already.

(t.b.w.)

#### assemble_text ####

takes a given list of chunks and joins them into a single text. If all chunks were provided with their associated token lists, the resulting text will have an associated token list as well.

(t.b.w.)

#### summarize_text ####

tries to summarize a given text. if this text is too long to be summarized in a single run, it will be split into chunks, summarized chunk by chunk and these summaries then by re-assembled into the final result. Depending on the size of the original text (compared to the context length of AI model used), several such rounds may be necessary before a response can be issued

(t.b.w.)

#### [try_to_]extract_search_string_from_text ####

tries to construct one or several search engine prompts from a given text

(t.b.w.)

#### [try_to_]extract_decision_from_text ####

tries to apply a given prompt to a given text returning either `yes` or `no` only (if `extract_decision_from_text` is used) or one of `yes`, `no` or `unknown` (if `try_to_extract_decision_from_text` is used). Please note, that the given prompt must tell the used AI model to only respond with one of the permitted keywords - this node then asserts the proper output.

(t.b.w.)

#### [try_to_]extract_list_from_text ####

tries to apply a given prompt to a given text returning a newline-separated list of strings (with no inner newlines, of course). Please note, that the given prompt must tell the used AI model to only respond with such a list - this node then asserts the proper output.

(t.b.w.)

#### [try_to_]extract_json_list_from_text ####

tries to apply a given prompt to a given text returning a JSON-formatted list of JavaScript strings. Please note, that the given prompt must tell the used AI model to only respond with such a list - this node then asserts the proper output.

(t.b.w.)

#### [try_to_]extract_response_from_text ####

tries to apply a given prompt to a given text with the objective to extract the desired information from that text.

(t.b.w.)

### Nodes for Additional Functionalities ###

The following nodes provide additional, often required functions

#### detect_language ####

Takes a given text and tries to detect the language it is written in.

(t.b.w.)

#### translate_language ####

Takes a given text and translates it from one language into another one.

(t.b.w.)

#### generate_function ####

takes a given text and generates the body of an asynchronous JavaScript function based on what the text requests (using a code-generating AI model). Please note, that the given prompt must tell the used AI model to generate such a function body - this node then asserts the proper output.

(t.b.w.)

#### evaluate_function ####

takes a given JavaScript function and (asynchronously) evaluates it within a sandbox. The given function must not require any arguments but may return any value which is then used as the output of this node. Any thrown exceptions are caught and passed using a different output pin. If desired, a timeout value may be given that aborts the function after a while.

(t.b.w.)

### Nodes for the Key-Value Store ###

The following nodes may be used to access the built-in Key-Value Store

#### load_key_store ####

loads a given store collection as a whole from the file system.

(t.b.w.)

#### patch_key_store ####

writes a single store collection entry onto the file system.

(t.b.w.)

#### save_key_store ####

writes a given store collection as a whole onto the file system.

(t.b.w.)

#### list_in_key_store ####

lists either all store collections or all entries of a given store collection.

(t.b.w.)

#### get_from_key_store ####

reads a single entry from a given store collection.

(t.b.w.)

#### put_to_key_store ####

writes a single entry into a given store collection (overwriting any previous contents).

(t.b.w.)

#### find_in_key_store ####

performs a simple full-text search over all entries of a given store collection and returns the keys of the first 1...n (or all) matching entries.

(t.b.w.)

#### remove_from_key_store ####

removes a single entry from a given store collection.

(t.b.w.)

### nodes for the Vector Store ###

The following nodes can be used to access the built-in Vector Store

#### load_vector_store ####

(t.b.w.)

#### patch_vector_store ####

(t.b.w.)

#### save_vector_store ####

(t.b.w.)

#### list_in_vector_store ####

(t.b.w.)

#### get_from_vector_store ####

(t.b.w.)

#### put_to_vector_store ####

(t.b.w.)

#### find_in_vector_store ####

(t.b.w.)

#### locate_in_vector_store ####

(t.b.w.)

#### remove_from_vector_store ####

(t.b.w.)

### Nodes for the UI ###

This toolkit directly supports web-based user interfaces created with the [Node-RED UIBuilder](https://github.com/TotallyInformation/node-red-contrib-uibuilder). The following nodes can be used to interact with such a user interface

#### send_ui_reset ####

(t.b.w.)

#### send_ui_state ####

(t.b.w.)

#### send_ui_data ####

(t.b.w.)

#### send_ui_known_model_list ####

(t.b.w.)

#### send_ui_available_model_list ####

(t.b.w.)

#### send_ui_download_progress ####

(t.b.w.)

#### send_ui_notice ####

(t.b.w.)

#### send_ui_message_list ####

(t.b.w.)

#### send_ui_progress ####

(t.b.w.)

#### send_ui_data_request ####

(t.b.w.)

#### send_ui_response ####

(t.b.w.)

#### process_ui_model_choice ####

(t.b.w.)

#### process_ui_download_continuation ####

(t.b.w.)

#### process_ui_download_cancellation ####

(t.b.w.)

#### process_ui_data_response ####

(t.b.w.)

#### process_ui_request ####

(t.b.w.)

#### process_ui_cancellation ####

(t.b.w.)

## Configuration Specification ##

A "toolkit configuration" is a JavaScript object with the following properties

* (t.b.w.)

## AI Model Specification ##

A "known AI model" is a model for which a JavaScript object with its most important characteristics exists. The specifications of some recommended models are already part of this toolkit, but you may equally well download other model files (provided that they are compatible with the existing executables) and add a proper specification for them yourself

A proper model specification contains the following properties

* **`Model`**
* **`ModelURL`**
* **`Creator`**
* **`CreatorURL`**
* **`DocumentationURL`**
* **`Architecture`**
* **`Purposes`** - optionally contains a list (i.e., a JavaScript array) with one or multiple foreseen use cases of this model (see below for details)
* **`Templates`** - mandatorially contains a set of templates which are used to convert a list of messages into a model prompt (see below for details)
* **`ContextLimit`** - mandatorially contains the max. number of tokens this model supports
* **`ReversePrompts`** - optionally contains a list (i.e., a JavaScript array) with up to four strings that may be used as "reverse prompts" for llama.cpp
* **`License`** - optionally contains the name of the model license
* **`LicenseURL`** - optionally contains the URL of a document that describes the model license in its detail

The following use cases are supported by this toolkit

* **`text`** - the model can be used to generate general text
* **`code`** - the model can be used to generate program source code
* **`embeddings`** - the model can be used to calculate an embedding vector

The `Templates` characteristic is a JavaScript object with the following properties

* **`Prefix`**
* **`System`**
* **`User`**
* **`Assistant`**
* **`Suffix`**




----

(old contents start here)


> Do you also use Bing Chat all the time? And marvel at the possibilities of the OpenAI GPTs?
> 
> What if you could run a similar system completely on your own computer - changeable and expandable according to your own wishes? Without disclosing data to third parties and without having to fear horrendous bills? And if you also want to hardware sensors, control devices or integrate any other functions? And without (or at least only a little) having to program?
> 
> The node-red-ai-toolkit provides you with all the necessary components to build your own private personal AI assistant in the no-code/low-code environment Node-RED - fully open-source and completely free of charge!

![Toolkit Screenshot](Toolkit-Screenshot.png)

Build your own

* Chatbot,
* autonomous Agent or
* any other AI-related application

with specific functionalities according to your wishes - completely without any coding (or very little one, at least).

If you don't have any programming experience, you may even decide to use "Blockly", i.e., to combine activity-specific parts in a LEGO-like manner (the result is then automatically converted to JavaScript, which means that you won't experience any performance loss)

For text-based applications, use existing GPT and/or RWKV models or train or fine-tune your own ones. For image-based applications, use LinerAI for training and import the resulting models into your Node-RED workspace.

Run the chosen AI models either locally or use an AI service provider over the internet.

### Why should you care? ###

This project is for you if you

* want to experiment with AI technologies or
* have an idea for an applications based on AI (or using AI functionalities)

but

* only have moderate knowledge of programming (or just limited time) and/or
* don't want to spend money or want your data to leave your machine.

> this repository should currently be considered as "work-in-progress" and is the author's contribution to the [Backdrop Build](https://backdropbuild.com/) contest. Please see this as kind of a "preview": since I'm currently in hospital because of a cancer surgery, I have to pause for a week but will continue developing from Dec, 11th on.

> Just a small note: if you like this work and plan to use it, consider "starring" this repository (you will find the "Star" button on the top right of this page), so that I know which of my repositories to take most care of.

If you would like to support my work for Node-RED in the public domain, you may consider "[buying me a coffee](https://www.buymeacoffee.com/andreasrozek)"

## Overview ##

From [Wikipedia](https://en.wikipedia.org/wiki/Node-RED): "_Node-RED is a flow-based, low-code development tool for visual programming developed [...] for wiring together hardware devices, APIs and online services_" (nota bene: just as "hardware devices" are not required, the creation of "online services" is also not mandatory - Node-RED is pretty universal)

Based on Node-RED, the "node-red-ai-toolkit" is a collection of Node-RED nodes and flows that help building AI-based applications: just

* import the appropriate nodes and flows into a Node-RED workspace,
* configure them according to your needs,
* wire them together to form your application,

and you are done!

### It's Part of a free Ecosystem ###

Since real-world applications need more than just a few AI functions, the nodes from this toolkit fit seemlessly into a complete eco-system of further nodes, such as

* [node-red-http-endpoint-examples](https://github.com/rozek/node-red-http-endpoint-examples) - use these to learn how to create service "endpoints" which can be reached, e.g., over the internet
<br>&nbsp;<br>
* [node-red-authorization-examples](https://github.com/rozek/node-red-authorization-examples) - often, you want your users to authenticate themselves - these examples show you how to achieve this
* [node-red-rest-service-examples](https://github.com/rozek/node-red-rest-service-examples) - if you do not need a full-blown database, one of the "key-value-stores" from these examples may already be sufficient. And, if you plan to manage (i.e., upload, modify, delete) the files on your server from remote, the file management nodes from this repo may get you going
* [node-red-web-server-examples](https://github.com/rozek/node-red-web-server-examples) - most often, your AI services go along with a web-server which serves associated web pages, input forms or plain files. If you do not want to install a separate web server, you may just import one of these examples to add an open or closed web server
* [node-red-user-management-example](https://github.com/rozek/node-red-user-management-example) - managing users is hard, especially, if you have to keep **everything GDPR-compliant**. This set of nodes gives you everything you need, from user registration over email confirmation, user detail management, password reset up to the complete deletion of a user (if he/she wants so)
* [node-red-contact-form-examples](https://github.com/rozek/node-red-contact-form-examples) - two examples for (GDPR-compliant) contact forms (for arbitrary users) and feedback forms (for authenticated users)
* [node-red-flow-brave](https://github.com/rozek/node-red-flow-brave), [node-red-flow-startpage](https://github.com/rozek/node-red-flow-startpage) - flows which allow you to run internet searches and parse their findings
<br>&nbsp;<br>
* and, last not least: flows to tokenize prompts, calculate embeddings and run completions using any of the following free LLMs: [Meta AI LLaMA](https://github.com/rozek/node-red-flow-llama), [Stanford Alpaca (trained with GPT-3)](https://github.com/rozek/node-red-flow-alpaca), [Stanford Alpaca (trained with GPT-4)](https://github.com/rozek/node-red-flow-gpt4-x-alpaca), [Nomic AI GPT4All (filtered version)](https://github.com/rozek/node-red-flow-gpt4all-filtered), [Nomic AI GPT4All (unfiltered version)](https://github.com/rozek/node-red-flow-gpt4all-unfiltered), [Nomic AI GPT4All-J](https://github.com/rozek/node-red-flow-gpt4all-j), [Vicuna](https://github.com/rozek/node-red-flow-vicuna), [OpenLLaMA](https://github.com/rozek/node-red-flow-openllama) and [WizardLM](https://github.com/rozek/node-red-flow-wizardlm)

Beside those mentioned above, you may also add any other Node-RED node and/or flow to your application - just browse the [Node-RED Library](https://flows.nodered.org/) and choose whatever seems to fit best

### Deploy it on the Internet - for free ###

And, if you plan to publish your application for other people to use it, you may be interested in

* [node-red-on-always-free-vm](https://github.com/rozek/node-red-on-always-free-vm), a set of instructions how to install a Node-RED server on an Oracle "Always-Free" VM (a program that gives you two small machines reachable from the internet all around the clock (24/7) for free, without ads or other nag-ware)

For deployment, you may replace the web server from one of the above examples by another one based on Node.js with Express (which still allows you to modify its behaviour without too much effort). In that case, you may consider

* [node-red-within-express](https://github.com/rozek/node-red-within-express) - an HTTP(S) server with embedded Node-RED instance

## Installation ##

This section shows you how to install Node.js, Node-RED, LLaMA.cpp and the flows from this repository - feel free to skip the steps for those components you already installed before.

### Node.js ###

"_[Node.js](https://nodejs.org/en) is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser._" (according to [Wikipedia](https://en.wikipedia.org/wiki/Node.js))

Start by [installing Node.js](https://nodejs.org/en) as described on their web page.

### Node-RED ###

"_[Node-RED](https://nodered.org/) is a flow-based, low-code development tool for visual programming developed originally by IBM..._" (according to [Wikipedia](https://en.wikipedia.org/wiki/Node-RED))

If not already done, install Node-RED as described on their "[Get Started](https://nodered.org/#get-started)" page.

### LLaMA.cpp ###

[LLaMA.cpp](https://github.com/ggerganov/llama.cpp) is a port of Facebook's LLaMA model in C/C++ (don't be fooled by the statement that the "_main goal of llama.cpp is to run the LLaMA model using 4-bit integer quantization on a MacBook_" - LLaMA.cpp runs just as well under Windows and Linux, and with different quantizations)

> Note: please use my own fork of the original LLaMA.cpp as the code in there raises the context limit and contains additional functions for tokenization - however, if you are fine with a context length of up to 4096 tokens and don't want to tokenize any prompts, the original code will work as fine

Get the code as follows:

```
git https://github.com/rozek/llama.cpp
cd llama.cpp
```

Then continue as described in the [LLaMA.cpp docs](https://github.com/rozek/llama.cpp#build)

Afterwards, rename the executables

* `main` to `llama`,
* `tokenization` to `llama-tokens` and
* `embedding` to `llama-embeddings`

and copy them into the Node-RED "User Directory" (by default, this folder is located at `$HOME/.node-red`).

### Language Models ###

You should now choose one or multiple language models and download them as described in their repositories (you _may_ als import the flows for the chosen LLMs, but don't have to):

* [Dans-TotSirocco-7B](https://github.com/rozek/node-red-flow-dans-totsirocco-7b)
* [StableLM-3B-4E1T](https://github.com/rozek/node-red-flow-stablelm-3b-4e1t)
* [StableCode-Completion-Alpha-3B-4K](https://github.com/rozek/node-red-flow-stablecode-completion-alpha-3b-4k)

In principle, any LLaMA.cpp compatible model should work, a nice choice could also be

* [42dot_LLM-SFT-1.3B](https://huggingface.co/rozek/42dot_LLM-SFT-1.3B_GGUF) (use the Q8_0 quantization)

## Toolkit Flows ##

Finally import the contents of file [](https://raw.githubusercontent.com/rozek/node-red-ai-toolkit/master/Toolkit-Flows.json) into a new worksheet.

After deployment, you may change the internals of the "configure" flow, redeploy and use any of the "Convenience Functions for Inpsection and Test" to play with the already existing nodes.

## Chatbot Example ##

For a small demonstrator, you may import the flows of a [node-red-uibilder-chatbot](https://github.com/rozek/node-red-uibilder-chatbot)

## License ##

[MIT License](LICENSE.md)
