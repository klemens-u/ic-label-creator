# ic-label-creator
Javascript/SVG Label Creator for IC Chip Pinouts

<img src="/assets/readme-example-labels.png" />



## About

This project was inspired by Ben Eater's 8-Bit breadboard computer. Multiple wiring errors while building the SAP-1 breadboard computer lead to the desire to label all chips with the actual pinouts.

## Participation

I'd be happy to accept pull request for other projects  additions to the "chip database" and general ideas and improvements.
You're also welcome to adapt the script for your own project. If you spot errors, please report them as issue or pull request too.

## Usage

How to create your own set of chips:

- Copy "ben-eater-8bit-computer.html" to a new file e.g. "your-set.html"
- Add the chips you'd like to print to the section "Draw chips"
- If you miss a chip's definitions in "chips.js" please add them and perform a pull request to contribute.
- Open your-set.html file in a web browser and print on self-sticking print labels. I used Firefox.
- If you create a set for public project please contribute it with a pull request

## Background and Acknowledgements

I used this as an opportunity to learn a bit of SVG and wrote a HTML/Javascript/SVG creator for computer IC chips.

Big thanks to Ben Eater for the wonderful videos on YouTube. I learned so much from it and finally understood how exactly a cpu/computer works.

