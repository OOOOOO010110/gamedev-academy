window.GDA_LESSONS = window.GDA_LESSONS || {};
window.GDA_LESSONS['CPP-01'] = {
  id:'CPP-01', subject:'CPP',title:'代码如何变成游戏程序？',subtitle:'从一行 cout 开始，理解编译、链接、运行与错误定位',duration:'55–75 分钟',level:'编程起步',version:'1.1.0',
  objectives:['认识源文件、编译器、目标文件、链接器与可执行程序','能自己写出并解释第一个 C++17 控制台程序','能区分编译错误、链接错误与运行结果错误','知道如何观察证据，而不是仅凭“看起来对”判断程序'],
  tags:['编译','链接','main','标准输出','错误分类'],
  overview:'你在 Unity 中点下 Play 或 Build 时，背后发生的事情远不止“运行代码”。理解代码从文本到程序的路径，是以后排查构建失败、读懂 C++ 报错以及理解 Unity 构建链路的起点。',
  sections:[
   {id:'motivation', title:'01 · 从一个游戏需求开始',blocks:[
     {type:'prose',html:'想象游戏开场需要显示一句 <code>Hello, Game!</code>。你写下 C++ 源码，但 CPU 并不直接理解 <code>cout</code> 这些英文单词。源代码必须经过工具链处理，才可能被执行。'},
     {type:'callout',tone:'insight',title:'先想一下',html:'Unity 的 C# 代码和 C++ 的执行路径并不完全相同。今天先把 <strong>C++ 的编译-链接-运行链条</strong>弄清；之后再回头比较 Mono、IL2CPP 和原生可执行程序。'}
   ]},
   {id:'pipeline',title:'02 · 程序是怎样诞生的？',blocks:[
     {type:'flow',nodes:[{label:'main.cpp',desc:'你写的源代码'},{label:'编译器',desc:'检查语法 / 生成目标文件'},{label:'main.o',desc:'机器指令与符号信息'},{label:'链接器',desc:'连接所需函数与库'},{label:'可执行程序',desc:'操作系统加载运行'}]},
     {type:'prose',html:'编译器（例如 g++）负责分析 C++ 源码并生成目标文件；链接器把目标文件与需要的库关联起来，形成最终可执行文件。<strong>“编译成功”不一定表示“链接成功”</strong>，也更不代表程序逻辑正确。实际工具链可能把编译和链接通过同一条命令完成。'},
     {type:'code',label:'在终端中理解两个阶段',lang:'bash',code:'g++ -std=c++17 -c main.cpp -o main.o   # 只编译\ng++ main.o -o game                        # 链接\n./game                                    # 运行（Windows 下为 game.exe）'},
     {type:'callout',tone:'note',title:'游戏相关',html:'将来遇到 “undefined reference” / “unresolved external symbol”，应该首先想到<strong>链接阶段</strong>，而不是在游戏 Update 逻辑里乱找问题。'}
   ]},
   {id:'hello',title:'03 · 写出第一个 C++ 游戏程序',blocks:[
     {type:'code',label:'main.cpp · C++17',lang:'cpp',code:'#include <iostream>\n\nint main() {\n    std::cout << "Hello, Game!" << std::endl;\n    return 0;\n}'},
     {type:'prose',html:'<code>#include &lt;iostream&gt;</code> 引入标准输入输出的声明；<code>int main()</code> 是普通控制台程序的入口函数；<code>std::cout</code> 把内容写到标准输出；<code>std::endl</code> 换行并刷新输出缓冲区；<code>return 0</code> 表示正常退出。注意：真实游戏引擎的入口与生命周期并不一定由你手写的 <code>main</code> 来管理。'},
     {type:'compare',left:{title:'直接写死输出',body:'能展示固定信息，适合刚开始验证环境；但遇到动态血量就不够用了。'},right:{title:'存储数据再输出',body:'变量允许程序根据游戏状态显示不同信息，下一课会开始使用。'}},
     {type:'callout',tone:'warning',title:'一个容易混淆的细节',html:'<code>"Hello, Game!"</code> 是字符串字面量；而 <code>Hello, Game!</code> 没有双引号，编译器会把它按代码解析，通常会报错。'}
   ]},
   {id:'errors',title:'04 · 三类错误：发生在不同阶段',blocks:[
     {type:'steps',items:[{title:'编译错误',desc:'例如缺少字符串引号、分号或标识符未声明。程序还没有生成可执行文件。'},{title:'链接错误',desc:'某个函数声明可以被编译器接受，但它的定义在链接时找不到。'},{title:'运行期或逻辑错误',desc:'已经生成并运行了程序，但输出不符合需求，或执行时发生崩溃。'}]},
     {type:'code',label:'思考：哪一步会失败？',lang:'cpp',code:'int GetCoins();       // 只有声明\nint main() {\n    return GetCoins(); // 如果没有对应定义，通常链接失败\n}'},
     {type:'prose',html:'定位错误要先找<strong>阶段与证据</strong>：出错的是源码语法、缺失符号，还是程序运行后的状态？同一个“程序不工作”，根因可能完全不同。编译器选项、构建系统、操作系统都会影响具体报错文字。'}
   ]},
   {id:'tradeoffs',title:'05 · 原理、选型、边界和验证',blocks:[
     {type:'compare',left:{title:'直接编译单文件',body:'命令短、适合小练习；每次重编译所有内容，项目大后效率低。'},right:{title:'多文件 + 构建工具',body:'可以管理依赖与增量构建；配置更复杂，但适合真实团队和游戏项目。'}},
     {type:'prose',html:'<strong>边界：</strong>如果程序无法运行，不要只检查 C++ 语法。还可能是缺失动态库、运行平台不兼容、文件路径错误或权限问题。<br><strong>性能：</strong>编译时间和游戏运行帧率不是同一件事。使用不同优化选项可能影响运行性能，但应在正确性和调试便利之间做取舍。<br><strong>扩展：</strong>从单个 <code>main.cpp</code> 扩大到战斗、背包和 NPC 多模块时，需要头文件、源文件和构建依赖管理。'},
     {type:'callout',tone:'insight',title:'本课需要记住的判断法',html:'问题发生在<strong>源代码处理、符号连接、程序加载，还是运行逻辑</strong>？先确认阶段，再选择调试工具。'}
   ]}
  ],
  quizzes:[
   {id:'CPP-01-A05',type:'single',prompt:'你可以生成 game.exe，但双击时提示缺少某个 DLL。优先归类为哪类问题？',choices:['源代码语法错误','程序加载时依赖缺失','GPU着色器性能过慢','链接器从未运行'],correct:1,explain:'程序已生成但加载时缺少动态库，和源码编译、静态链接、运行中逻辑错误都不同；先收集加载器报错和依赖信息。',tags:['程序加载','构建诊断'],source:'八股·编译流程',variant:{prompt:'程序能在开发机运行，拷贝到另一台机器提示找不到动态库。第一步合理做法是？',choices:['检查依赖库与部署方式','无条件重写游戏玩法','删除 main 函数','修改所有贴图格式'],correct:0,explain:'先核实可执行程序依赖及运行环境，再确定是否需要修改代码。'}},
   {id:'CPP-01-A01',type:'single',prompt:'C++ 源码写完后，哪一步通常负责把不同目标文件与所需库组合成可执行文件？',choices:['预处理器','链接器','游戏渲染器','文本编辑器'],correct:1,explain:'链接器处理符号引用、目标文件和库之间的连接。编译器先把源代码处理成目标代码。',tags:['编译','链接'],variant:{prompt:'一个函数已被声明但定义缺失，编译可能成功，最后在哪个阶段更容易报错？',choices:['链接阶段','资源加载阶段','GPU渲染阶段','玩家输入阶段'],correct:0,explain:'定义缺失通常在链接阶段表现为未解析符号。'}},
   {id:'CPP-01-A02',type:'single',prompt:'对于普通 C++ 控制台程序，下列哪项最接近 main 函数的作用？',choices:['每帧都会自动调用','程序的约定入口函数','只负责显示画面','只有链接失败时执行'],correct:1,explain:'main 是通常情况下托管环境之外的 C++ 程序入口；游戏引擎会进一步组织自己的主循环。',tags:['main'],variant:{prompt:'C++ 的 main() 通常与 Unity MonoBehaviour 的 Update() 是同一种逐帧回调吗？',choices:['是，它们都每帧执行','不是，main 是入口而 Update 是引擎生命周期回调'],correct:1,explain:'两者处于不同的执行层级。'}},
   {id:'CPP-01-A03',type:'single',prompt:'你希望输出 Hello, Game!，但写成 std::cout << Hello, Game!;，最可能首先发生什么？',choices:['编译错误','链接成功但输出空行','运行后自动加引号','必然发生内存泄漏'],correct:0,explain:'没有字符串引号时，Hello 等会按标识符或其他语法处理，因此通常在编译阶段失败。',tags:['编译','标准输出'],variant:{prompt:'代码里少写一个字符串结束引号，最可能在哪一阶段发现？',choices:['运行后','编译时','链接后','文件下载时'],correct:1,explain:'字符串字面量的语法检查发生在编译阶段。'}},
   {id:'CPP-01-A04',type:'single',prompt:'程序已正常运行，但金币数量显示成 0 而不是预期的 10。优先把它归为哪类问题？',choices:['链接错误','编译错误','运行逻辑错误','目标文件缺失'],correct:2,explain:'程序能够运行，说明问题更可能出在状态初始化、计算或输出逻辑，需要检查运行中的数据。',tags:['错误分类'],variant:{prompt:'程序能够输出文字但数值算错了，通常先检查哪个环节？',choices:['运行逻辑','磁盘分区','链接器版本','显示器型号'],correct:0,explain:'首先验证运行期间的数据与计算。'}}
  ],
  coding:{id:'CPP-01-B01',title:'独立写出第一个游戏输出程序',description:'请写一个完整的 C++17 控制台程序：运行后输出一行 Hello, Game!（大小写、逗号、空格和感叹号均需要一致）。不要直接复制课文，先尝试自己输入。',starter:'#include <iostream>\n\nint main() {\n    // 请在这里完成输出\n\n    return 0;\n}',language:'C++17',checks:['包含 main 函数','能正确使用标准输出','运行后仅输出 Hello, Game! 一行'],sample:[{input:'（无输入）',output:'Hello, Game!'}],hints:['程序通常从 int main() 开始。','标准输出使用 std::cout 和 <<。','字符串需要双引号，结束语句需要分号。']},
  deep:{id:'CPP-01-C01',title:'从错误定位走向工程判断',questions:[{id:'why',label:'原理与调试',prompt:'某同学说“我的程序编译成功了，因此一定能正常运行”。请解释这个结论为什么不成立，并至少举出两种不同阶段的失败。',placeholder:'我会先区分……'},{id:'design',label:'技术选型与扩展',prompt:'你准备从一个 C++ 源文件升级到十个系统模块（战斗、背包、NPC……）。有哪些构建方面的变化？为什么不建议把所有代码永远放在 main.cpp？',placeholder:'当规模扩大时……'},{id:'change',label:'需求变化挑战',prompt:'需求变化：程序在你电脑上正常运行，但发给同学的 Windows 电脑后打不开。请按优先级列出你的排查步骤，并指出每一步的验证证据。',placeholder:'第1步：确认……'}]},
  review:{question:'把本课技能迁移到“构建失败”的情境：如何区分缺少函数实现与运行时缺少动态库？',type:'change'}
 };
