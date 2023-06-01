import type { Meta, StoryObj } from '@storybook/react'
import { Preview } from './Preview'
import { createChoice, createQuestion } from 'sqc-core-functions'
import { testQuestions } from '__tests__/_common/question'

const meta = {
  title: 'Components/Preview',
  component: Preview,
  tags: ['docsPage'],
  argTypes: {
    question: {
      control: { type: 'object' },
    },
  },
} satisfies Meta<typeof Preview>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    question: createQuestion({
      id: '1',
      choices: [createChoice({ id: '1.1', isCorrect: true })],
    }),
  },
}
export const SimpleQuestion: Story = {
  args: {
    question: testQuestions[0],
  },
}
export const CodeHighlighted: Story = {
  args: {
    question: createQuestion({
      id: '1',
      choices: [createChoice({ id: '1.1', isCorrect: true })],
      question:
        '<pre class="ql-syntax" spellcheck="false">$(<span class="hljs-variable language_">document</span>).<span class="hljs-title function_">ready</span>(<span class="hljs-keyword">function</span>() {\n  $(<span class="hljs-string">\'input\'</span>).<span class="hljs-title function_">keydown</span>(<span class="hljs-keyword">function</span>(<span class="hljs-params">event</span>) {\n    <span class="hljs-keyword">if</span> (event.<span class="hljs-property">keyCode</span> == <span class="hljs-number">13</span>) {\n      $(<span class="hljs-variable language_">this</span>).<span class="hljs-title function_">closest</span>(<span class="hljs-string">\'form\'</span>).<span class="hljs-title function_">submit</span>();\n    }\n  });\n});\n</pre><p>hello</p>',
    }),
  },
}
export const Image: Story = {
  args: {
    question: createQuestion({
      id: '1',
      choices: [createChoice({ id: '1.1', isCorrect: true })],
      question:
        '<p>link image</p><p><img src="https://edu-games-academy.github.io/Simple-Quiz-Composer/logo.svg" style="height: 2.25rem;" alt="SQC Logo"></p><p>embedded image</p><p><img src="data:image/png;base64,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"></p>',
    }),
  },
}
export const MathFormula: Story = {
  args: {
    question: createQuestion({
      id: '1',
      choices: [createChoice({ id: '1.1', isCorrect: true })],
      question:
        '<p>Calculate the value: <span class="ql-formula" data-value="\\int_{0}^{\\infty }\\sqrt[5]{\\lim_{x \\to 0} \\mathrm{C}_{n+1}^{m+n}}\\frac{d }{dx}">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msubsup><mo>∫</mo><mn>0</mn><mi mathvariant="normal">∞</mi></msubsup><mroot><mrow><msub><mrow><mi>lim</mi><mo>⁡</mo></mrow><mrow><mi>x</mi><mo>→</mo><mn>0</mn></mrow></msub><msubsup><mi mathvariant="normal">C</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mrow><mi>m</mi><mo>+</mo><mi>n</mi></mrow></msubsup></mrow><mn>5</mn></mroot><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac></mrow><annotation encoding="application/x-tex">\\int_{0}^{\\infty }\\sqrt[5]{\\lim_{x \\to 0} \\mathrm{C}_{n+1}^{m+n}}\\frac{d }{dx}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.84em; vertical-align: -0.6116em;"></span><span class="mop"><span class="mop op-symbol small-op" style="margin-right: 0.1945em; position: relative; top: -0.0006em;">∫</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.8593em;"><span class="" style="top: -2.3442em; margin-left: -0.1945em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">0</span></span></span></span><span class="" style="top: -3.2579em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">∞</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.3558em;"><span class=""></span></span></span></span></span></span><span class="mspace" style="margin-right: 0.1667em;"></span><span class="mord sqrt"><span class="root"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6923em;"><span class="" style="top: -2.8701em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size6 size1 mtight"><span class="mord mtight"><span class="mord mtight">5</span></span></span></span></span></span></span></span><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 1.2284em;"><span class="svg-align" style="top: -3.8em;"><span class="pstrut" style="height: 3.8em;"></span><span class="mord" style="padding-left: 1em;"><span class="mop"><span class="mop">lim</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3011em;"><span class="" style="top: -2.55em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">x</span><span class="mrel mtight">→</span><span class="mord mtight">0</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mspace" style="margin-right: 0.1667em;"></span><span class="mord"><span class="mord mathrm">C</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.8115em;"><span class="" style="top: -2.4337em; margin-left: 0em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mbin mtight">+</span><span class="mord mtight">1</span></span></span></span><span class="" style="top: -3.1031em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">m</span><span class="mbin mtight">+</span><span class="mord mathnormal mtight">n</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.3246em;"><span class=""></span></span></span></span></span></span></span></span><span class="" style="top: -3.1884em;"><span class="pstrut" style="height: 3.8em;"></span><span class="hide-tail" style="min-width: 1.02em; height: 1.88em;"><svg width="400em" height="1.88em" viewBox="0 0 400000 1944" preserveAspectRatio="xMinYMin slice"><path d="M983 90\nl0 -0\nc4,-6.7,10,-10,18,-10 H400000v40\nH1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7\ns-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744\nc-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30\nc26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722\nc56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5\nc53.7,-170.3,84.5,-266.8,92.5,-289.5z\nM1001 80h400000v40h-400000z"></path></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.6116em;"><span class=""></span></span></span></span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.8801em;"><span class="" style="top: -2.655em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">d</span><span class="mord mathnormal mtight">x</span></span></span></span><span class="" style="top: -3.23em;"><span class="pstrut" style="height: 3em;"></span><span class="frac-line" style="border-bottom-width: 0.04em;"></span></span><span class="" style="top: -3.394em;"><span class="pstrut" style="height: 3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">d</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.345em;"><span class=""></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span>﻿</span> </p>',
    }),
  },
}
