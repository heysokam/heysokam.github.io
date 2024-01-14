<!--
.. @fileoverview Entry point of the documentation
.. toctree::
   :maxdepth: 2
   :caption: Contents:

   start
   examples
   manual

.. toctree::
   :maxdepth: 2
   :caption: API Reference:

   api
-->
# m*gpu | Graphics Library | Vulkan
`m*gpu` is:
- A modern graphics library/API made with Vulkan
- Inspired by the concepts and design of webgpu/wgpu/dawn
- Fully configurable
- Intuitive and easy to use
- Usable from any C compatible language

Goals:
- Be and stay as intuitive as possible within the paradigms of current/next-gen graphics programming
- Provide sane defaults that can be omitted _(aka. avoid redundant boilerplate)_
- Bring Vulkan to the indie scene by lowering the amount of time that needs to be spent writing abstractions and boilerplate
  _(just like webgpu-native does with its all-APIs abstraction)_

Non-goals:
- Multi-API backend.
  This library targets Vulkan exclusively.
- Be fully source-compatible with Vulkan.
  Compatibility is highly desirable and attempted, but not a strict requirement.
- Use Vulkan terminology seamlessly.
  Intuitive use is a #1 priority, even at the expense of modifying existing Vulkan words/concepts.
  _eg: PhysicalDevice+LogicalDevice vs Device .. Layout vs Shape .. RenderPass vs RenderTarget .. etc_

## Overview
Author: [sOkam!](https://github.com/heysokam)
License: [LGPLv3](https://www.gnu.org/licenses/lgpl-3.0.en.html)

## License: Why LGPLv3
_tl;dr: Same reason [explained in this GNU article](https://www.gnu.org/licenses/why-not-lgpl.html)_  
Using the ordinary GPL is not advantageous for `mgpu`.  

There are plenty of other MIT graphics APIs.  
Roughly the same features are already available for proprietary software through the use of `wgpu`, `dawn`, `webgpu-native`, `metal`, etc.  

This means that mgpu/cgpu cannot give free software any particular advantage.  
Using the GPL for mgpu/cgpu would drive proprietary software developers to just use another API.  
No problem for them, only for us.  

