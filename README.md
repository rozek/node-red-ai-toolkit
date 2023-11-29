# node-red-ai-toolkit

> Do you also use Bing Chat all the time? And marvel at the possibilities of the OpenAI GPTs?
> What if you could run a similar system completely on your own computer - changeable and expandable according to your own wishes? Without disclosing data to third parties and without having to fear horrendous bills? And if you also want to hardware sensors, control devices or integrate any other functions? And without (or at least only a little) having to program?
> The node-red-ai-toolkit provides you with all the necessary components to build your own private personal AI assistant in the no-code/low-code environment Node-RED - fully open-source and completely free of charge!

a collection of Node-RED nodes and flows for interactive low-code development of
applications using AI technologies - free of charge and even for beginners or 
casual programmers

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

> this repository should currently be considered as "work-in-progress". It's the author's contribution to the [Backdrop Build](https://backdropbuild.com/) contest which means that it is planned to be "shipped" in the beginning of December 2023.

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



## License ##

[MIT License](LICENSE.md)
