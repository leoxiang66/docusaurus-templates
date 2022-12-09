---
sidebar_position: 1
---

# Introduction

Text2Music is a virtual composer that creates style-specific music based on user-defined prompts. It's written in Python and designed for ease of use. Just a few lines of codes and there you go!

## Installation

The recommended Python version is 3.7. Text2Music depends on `PyTorch`, `Transformers`, etc. You can use `pip` to install it:

```
pip install text2music
```

## Minimal Example

```python
import text2music as t2m
t2m.experimental.mubert_generate(
  prompt = 'I am quite happy today',
  duration = 10,
  output_path = 'test.mp3'
)
```
