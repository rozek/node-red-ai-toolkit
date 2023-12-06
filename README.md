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
* **detect_language** - tries to detect the language of a given text
* **translate_language** - translates a given text from one language into another<br>&nbsp;<br>
* **split_text** - splits a long text into chunks suitable for a given model
* **assemble_text** - reassembles a split text (e.g., after chunk-wise processing)<br>&nbsp;<br>
* **summarize_text** - summarizes a given text<br>&nbsp;<br>
* **[try_to_]extract_search_string_from_text** - constructs a search engine prompt from a given text
* **[try_to_]extract_decision_from_text** - runs a "text completion" with the possible results `yes` or `no` (or `unknown`)
* **[try_to_]extract_[json]_list_from_text** - runs a "text completion" and returns either a newline-separated list of strings or a list of JavaScript strings in JSON format
* **[try_to_]extract_response_from_text** - runs a "text completion" with a request that is applied to a given text<br>&nbsp;<br>
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

(t.b.w.)

#### list_configuration ####

(t.b.w.)

#### check_for_toolkit_updates ####

(t.b.w.)

#### check_for_model_updates ####

(t.b.w.)

#### update_known_models ####

(t.b.w.)

#### list_known_models ####

(t.b.w.)

#### list_available_models ####

(t.b.w.)

#### list_pending_models ####

(t.b.w.)

#### learn_model ####

(t.b.w.)

#### unlearn_model ####

(t.b.w.)

#### download_file ####

(t.b.w.)

#### cancel_download ####

(t.b.w.)

### AI-related Nodes ###

#### format_prompt ####

(t.b.w.)

#### complete_text ####

(t.b.w.)

#### complete_chat ####

(t.b.w.)

#### tokenize_text ####

(t.b.w.)

#### calculate_embedding ####

(t.b.w.)

#### split_text ####

(t.b.w.)

#### assemble_text ####

(t.b.w.)

#### summarize_text ####

(t.b.w.)

#### [try_to_]extract_search_string_from_text ####

(t.b.w.)

#### [try_to_]extract_decision_from_text ####

(t.b.w.)

#### [try_to_]extract_[json]_list_from_text ####

(t.b.w.)

#### [try_to_]extract_response_from_text ####

(t.b.w.)

### Nodes for Additional Functionalities ###

#### detect_language ####

(t.b.w.)

#### translate_language ####

(t.b.w.)

#### generate_function ####

(t.b.w.)

#### evaluate_function ####

(t.b.w.)

### Nodes for the Key-Value Store ###

#### load_key_store ####

(t.b.w.)

#### patch_key_store ####

(t.b.w.)

#### save_key_store ####

(t.b.w.)

#### list_in_key_store ####

(t.b.w.)

#### get_from_key_store ####

(t.b.w.)

#### put_to_key_store ####

(t.b.w.)

#### find_in_key_store ####

(t.b.w.)

#### remove_from_key_store ####

(t.b.w.)

### nodes for the Vector Store ###

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
