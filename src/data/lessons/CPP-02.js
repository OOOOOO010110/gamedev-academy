window.GDA_LESSONS = window.GDA_LESSONS || {};
window.GDA_LESSONS['CPP-02'] = {
  id:'CPP-02',subject:'CPP',title:'变量、血量与数值边界',subtitle:'用 C++ 的类型系统实现第一段游戏规则',duration:'65–85 分钟',level:'编程起步',version:'1.1.0',
  objectives:['能声明、初始化、修改变量，理解赋值与比较的区别','理解 int、double、bool 与字符串的最常见使用场景','能使用 if 和基本运算写出血量伤害规则','解释溢出、隐式转换、作用域及简单防护方法'],
  tags:['变量','类型','if','数值边界','const','作用域'],
  overview:'游戏规则往往从一个数值开始：角色 HP 为100，受到35点伤害后还剩多少？真正困难的不是减法，而是面对负伤害、超大数值、重复调用和状态共享时，程序是否仍然正确。',
  sections:[
   {id:'motivation',title:'01 · 游戏状态为什么需要变量？',blocks:[
     {type:'prose',html:'第一课的输出是固定字符串。现在希望角色受击后血条发生变化，就需要一个可以存储并更新的状态，例如 <code>int hp = 100;</code>。<strong>变量可以理解成有名字、有类型的存储位置或对象</strong>，不要机械地把它想成“一个永久固定地址的盒子”。'},
     {type:'code',label:'一个最小血量计算程序',lang:'cpp',code:'#include <iostream>\n\nint main() {\n    int hp = 100;\n    int damage = 35;\n    hp = hp - damage;\n    std::cout << hp << " HP" << std::endl;\n    return 0;\n}'},
     {type:'callout',tone:'insight',title:'赋值不是数学等式',html:'<code>hp = hp - damage;</code> 的意思是：先计算右侧表达式，再把结果赋给左侧变量。不是说一个数在数学上等于自己减去 35。'}
   ]},
   {id:'types',title:'02 · 选择合适的数据类型',blocks:[
     {type:'compare',left:{title:'int · 整数',body:'适合生命值、关卡编号、物品数量等整数状态；范围有限。'},right:{title:'double · 浮点数',body:'适合需要小数的计算；有舍入误差，不能默认所有小数都可精确表示。'}},
     {type:'code',label:'常见类型',lang:'cpp',code:'int hp = 100;\ndouble speed = 3.5;\nbool isAlive = true;\nconst int maxHp = 100; // 不允许通过 maxHp 直接修改它'},
     {type:'prose',html:'<code>bool</code> 只表示 true/false；<code>const</code> 防止通过这个变量名修改其值。C++ 的 <code>int</code> 范围是实现相关的，但在主流桌面平台上通常是有符号32位。需要明确宽度时可以使用 <code>std::int32_t</code> 等定宽类型（在对应类型可用的实现上）。'},
     {type:'callout',tone:'warning',title:'精度与范围是类型选择的一部分',html:'生命值用整数通常更容易表达规则；用浮点数比较“恰好为0”要谨慎，而让一个有符号整数越过可表示范围会涉及未定义行为。'}
   ]},
   {id:'condition',title:'03 · 条件分支让规则生效',blocks:[
     {type:'code',label:'带下限保护的伤害逻辑',lang:'cpp',code:'int hp = 100;\nint damage = 35;\nif (damage > 0) {\n    hp -= damage;\n    if (hp < 0) hp = 0;\n}'},
     {type:'prose',html:'<code>if</code> 根据条件决定是否执行；<code>&gt;=</code> 与 <code>==</code> 是比较运算，<code>=</code> 是赋值。上例仅用于小范围基础演示：若 damage 和 hp 接近整数极值，<code>hp -= damage</code> 也可能先溢出，之后的“低于0就归零”无法补救。更稳妥的做法是在<strong>运算前</strong>检查范围。'},
     {type:'callout',tone:'note',title:'本课实践目标',html:'自己写出 <code>ApplyDamage(hp, damage)</code>：<strong>伤害不能为负；血量不会低于0；不能依赖已经溢出的中间值</strong>。下一课会学习函数参数和引用的更多细节，本课暂时按值传参并返回新血量。'}
   ]},
   {id:'scope',title:'04 · 作用域与隐式转换',blocks:[
     {type:'code',label:'作用域演示',lang:'cpp',code:'int hp = 100;\nif (true) {\n    int shield = 20;\n    hp = hp - shield;\n}\n// 此处不能直接使用 shield；它在块内声明'},
     {type:'prose',html:'变量并不是在所有地方都可访问。代码块 <code>{ }</code> 会影响局部变量可见的范围。把宽数值转换为窄整数、或把浮点数转换为整数，也可能丢失信息。<strong>明确需求与类型范围</strong>，比“能编译就行”更重要。'},
     {type:'compare',left:{title:'把 HP 写成全局变量',body:'调用方便，但共享状态增加耦合；多人、多角色以及测试时容易相互影响。'},right:{title:'函数接收 HP 并返回结果',body:'输入输出清晰，便于单元测试和复用；后面再讨论引用与组件所有权。'}},
   ]},
   {id:'tradeoffs',title:'05 · 从血量计算走向可维护规则',blocks:[
     {type:'steps',items:[{title:'先约定输入',desc:'血量和伤害取什么范围？是否允许负伤害表示治疗？本课规定“不允许”。'},{title:'先检查边界，再进行运算',desc:'避免有符号整数溢出；如果伤害达到当前血量，直接返回 0。'},{title:'保证不变量',desc:'最终血量始终在 [0, 原血量]，假设传入的当前血量非负。'},{title:'准备需求变化',desc:'以后可能加入护盾、暴击、治疗、最大血量和网络同步，需要重新定义职责与状态来源。'}]},
     {type:'callout',tone:'insight',title:'一个方案适用与否，取决于约束',html:'<strong>现在</strong>用一个纯函数计算生命值很简单；当游戏增加护盾、抗性、伤害事件和网络权威端时，单个函数不一定负责所有事。要明确哪些行为是数据计算，哪些是状态管理和事件通知。'}
   ]}
  ],
  quizzes:[
   {id:'CPP-02-A05',type:'single',prompt:'对 int 类型的血量，哪种处理方式更能避免极端输入造成有符号整数溢出？',choices:['先减再判断是否小于0','先判断 damage >= hp，再决定是否相减','先强制加上大量伤害','不使用任何条件判断'],correct:1,explain:'在输入约定为非负的前提下，若 damage >= hp 直接返回0；否则相减，不会先产生超出范围的负中间值。',tags:['数值边界','前置校验'],source:'八股-2·数值边界',variant:{prompt:'程序约定 hp 和 damage 非负。对 hp=10, damage=INT_MAX，安全的处理是？',choices:['直接计算10-INT_MAX后再取绝对值','先判断伤害已达到血量，直接返回0','继续累加伤害直到变为正数','忽略输入异常'],correct:1,explain:'先按规则分支，避免产生不需要的极端整数运算。'}},
   {id:'CPP-02-A01',type:'single',prompt:'执行 int hp = 100; hp = hp - 35; 后，hp 的值是？',choices:['35','65','100','编译失败'],correct:1,explain:'右侧先计算 100 - 35 = 65，再赋值给 hp。',tags:['变量'],variant:{prompt:'int hp = 80; hp -= 20; 执行后 hp 是？',choices:['100','60','20','80'],correct:1,explain:'-= 是复合赋值，等价于 hp = hp - 20（在此简单整数情境中）。'}},
   {id:'CPP-02-A02',type:'single',prompt:'如果某个游戏状态只能是“已死亡/未死亡”，哪种类型最直接？',choices:['double','std::string','bool','int*'],correct:2,explain:'bool 直接表示两种逻辑状态。但实际角色死亡状态也可能需要更复杂的状态机。',tags:['类型'],variant:{prompt:'bool isAlive = true; 用来表达哪类状态更自然？',choices:['小数移动速度','布尔开关','长文本描述','多个背包物品'],correct:1,explain:'bool 表达逻辑真/假。'}},
   {id:'CPP-02-A03',type:'single',prompt:'在 C++ 中，以下哪个表达式是“判断 hp 是否等于 0”，而不是赋值？',choices:['hp = 0','hp == 0','hp += 0','hp -= 0'],correct:1,explain:'== 用于相等比较，= 用于赋值。',tags:['if','变量'],variant:{prompt:'以下哪个表达式表示“hp 不等于 0”？',choices:['hp != 0','hp =! 0','hp == 0','hp = 0'],correct:0,explain:'!= 表示不等于。'}},
   {id:'CPP-02-A04',type:'single',prompt:'假设 hp 和 damage 都是有符号 int。先计算 hp - damage 再判断是否小于0，为什么有时不可靠？',choices:['所有 int 都可以表示任意大的数','可能在减法时已经发生有符号整数溢出','if 不能判断负数','std::cout 会自动修改 hp'],correct:1,explain:'有符号整数的表示范围有限，溢出在 C++ 中属于未定义行为。应在运算前根据边界分支。',tags:['数值边界'],variant:{prompt:'要避免带符号整数运算超出表示范围，防护检查应优先放在哪？',choices:['执行运算前','只有打印后','编译器退出后','程序安装后'],correct:0,explain:'应在产生非法中间值之前就判断范围。'}}
  ],
  coding:{id:'CPP-02-B01',title:'实现安全的生命值扣减',description:'编写函数 ApplyDamage，按值接收当前 HP 与伤害，返回新的 HP。规则：hp 和 damage 约定为非负整数；damage >= hp 时返回0，否则返回 hp - damage。这个分支能避免正数扣减导致的负值。额外思考：遇到非法负输入应怎么办？',starter:'int ApplyDamage(int hp, int damage) {\n    // 约定 hp >= 0，damage >= 0\n    // 完成函数并返回新血量\n\n}',language:'C++17',checks:['函数签名与返回值匹配','处理伤害为0','伤害大于等于血量时为0','伤害小于血量时返回正确差值'],sample:[{input:'ApplyDamage(100, 35)',output:'65'},{input:'ApplyDamage(20, 25)',output:'0'},{input:'ApplyDamage(80, 0)',output:'80'},{input:'ApplyDamage(0, 0)',output:'0'}],hints:['先考虑 damage >= hp 的情形。','在需要相减之前，先用 if 返回 0。','否则返回 hp - damage；由于 0 ≤ damage < hp，结果非负。']},
  deep:{id:'CPP-02-C01',title:'解释血量规则背后的技术决策',questions:[{id:'why',label:'原理与边界',prompt:'为什么不能总是先用 hp -= damage 再将负数改成0？请说明极端整数输入与预先检查的关系。',placeholder:'如果运算中的数值超过类型范围……'},{id:'design',label:'选型与验证',prompt:'假设 HP 是整数但移动速度是浮点数。解释选择不同类型的原因，并为 ApplyDamage 列出至少4组测试（含边界）。',placeholder:'HP 选择 int 的原因……\n测试1：……'},{id:'change',label:'需求变化挑战',prompt:'加入护盾：伤害先扣护盾，再扣生命值，同时要求血量更新后通知 UI。你会如何分拆“纯计算”“角色状态”和“UI通知”的职责？目前不要求写完整类。',placeholder:'我会把职责分为……'}]},
  review:{question:'需求迁移：若允许负伤害表示治疗，ApplyDamage 的“damage>=hp”分支还有哪些假设失效？要先明确什么约束？',type:'change'}
 };
