window.GDA_CATALOG = [
  {
    "id": "CPP",
    "name": "C++ 语言与内存模型",
    "count": 12,
    "lessons": [
      {
        "id": "CPP-01",
        "title": "编译、链接、运行流程；源码到可执行程序；基础输入输出",
        "practice": "编译 Hello Game，并故意制造编译错误、链接错误和运行期错误，区分发生阶段"
      },
      {
        "id": "CPP-02",
        "title": "基本类型、作用域、const、隐式转换与数值边界",
        "practice": "编写 HP/伤害与计数程序，验证溢出、隐式转换和作用域阴影"
      },
      {
        "id": "CPP-03",
        "title": "指针、引用、数组、指针算术、悬空指针与UB",
        "practice": "修改指针所指 HP，复现空指针/悬空引用的风险并给出防护"
      },
      {
        "id": "CPP-04",
        "title": "函数传参、重载、内联、Lambda与调用开销",
        "practice": "实现 ApplyDamage 的值传递、引用传递与 const 引用版本并比较"
      },
      {
        "id": "CPP-05",
        "title": "类、对象内存布局、构造/析构、RAII",
        "practice": "为 Enemy 添加构造析构日志，追踪不同作用域下生命周期"
      },
      {
        "id": "CPP-06",
        "title": "拷贝/移动语义、右值引用、Rule of 0/3/5",
        "practice": "为管理资源的类演示拷贝与移动，说明重复释放的规避"
      },
      {
        "id": "CPP-07",
        "title": "继承、虚函数、动态绑定、对象切片与接口设计",
        "practice": "通过基类指针管理不同攻击行为，测试虚析构与对象切片"
      },
      {
        "id": "CPP-08",
        "title": "模板、泛型、STL容器与迭代器失效",
        "practice": "编写通用查找函数，测试 vector 迭代器失效场景"
      },
      {
        "id": "CPP-09",
        "title": "vector/map/unordered_map、算法复杂度与缓存局部性",
        "practice": "为道具 ID 查找在 vector/map/unordered_map 中选型并测量"
      },
      {
        "id": "CPP-10",
        "title": "智能指针、所有权、资源生命周期与循环引用",
        "practice": "用 unique_ptr 表达对象所有权，复现并修复 shared_ptr 循环引用"
      },
      {
        "id": "CPP-11",
        "title": "多线程、互斥锁、竞争条件与基础并发",
        "practice": "用两线程修改金币计数，复现竞态并比较锁/原子方案"
      },
      {
        "id": "CPP-12",
        "title": "综合实战：对象池+实体组件简化模型；设计取舍和口头答辩",
        "practice": "完成实体/对象池小型系统，提供生命周期测试、扩展要求与答辩"
      }
    ]
  },
  {
    "id": "ALG",
    "name": "数据结构与算法",
    "count": 16,
    "lessons": [
      {
        "id": "ALG-01",
        "title": "复杂度、数组与字符串、在线判题输入输出",
        "practice": "写线性查找、统计函数，在线判题平台处理空数组与边界"
      },
      {
        "id": "ALG-02",
        "title": "双指针、滑动窗口与不变量",
        "practice": "完成两数之和/最长连续片段的双指针或滑窗练习并解释不变量"
      },
      {
        "id": "ALG-03",
        "title": "哈希表、集合、频次统计与冲突理解",
        "practice": "实现掉落道具频次统计，分析哈希冲突与内存代价"
      },
      {
        "id": "ALG-04",
        "title": "链表、快慢指针、指针安全",
        "practice": "实现链表反转或环检测，处理空链与单节点"
      },
      {
        "id": "ALG-05",
        "title": "栈、队列、单调栈/队列",
        "practice": "用栈实现括号校验，选一道单调栈题解释维护条件"
      },
      {
        "id": "ALG-06",
        "title": "二分查找、边界处理与循环不变量",
        "practice": "完成二分查找首个满足条件的位置，专门测试左右端点"
      },
      {
        "id": "ALG-07",
        "title": "排序：快排/归并/堆排、稳定性和适用场景",
        "practice": "实现/比较常见排序，构造稳定性反例并选用适当算法"
      },
      {
        "id": "ALG-08",
        "title": "递归、回溯、剪枝与复杂度",
        "practice": "完成组合枚举并加剪枝，估算搜索空间"
      },
      {
        "id": "ALG-09",
        "title": "二叉树、BST、遍历与重建",
        "practice": "手写树的遍历与层序访问，处理退化树"
      },
      {
        "id": "ALG-10",
        "title": "堆、优先队列、Top-K与排行榜",
        "practice": "用优先队列维护伤害排行榜 Top-K，比较全排序"
      },
      {
        "id": "ALG-11",
        "title": "图、BFS/DFS、连通性",
        "practice": "在地图网格中实现 BFS/DFS，说明访问标记规则"
      },
      {
        "id": "ALG-12",
        "title": "Dijkstra与A*；游戏寻路成本模型",
        "practice": "在带权地图比较 Dijkstra 与 A*，说明启发函数条件"
      },
      {
        "id": "ALG-13",
        "title": "贪心与反例构造",
        "practice": "给出贪心策略并构造反例，验证能否成立"
      },
      {
        "id": "ALG-14",
        "title": "动态规划：状态、转移、背包",
        "practice": "写一道背包/路径 DP，逐格解释状态和转移"
      },
      {
        "id": "ALG-15",
        "title": "并查集、区间、位运算与综合技巧",
        "practice": "完成并查集连通性题，并练习位标记或区间合并"
      },
      {
        "id": "ALG-16",
        "title": "限时综合笔试：读题-选型-编码-测试-复盘",
        "practice": "模拟限时笔试：独立完成多题，分析错因、复杂度和验证策略"
      }
    ]
  },
  {
    "id": "CS",
    "name": "C# 语言与 Unity 运行时",
    "count": 12,
    "lessons": [
      {
        "id": "CS-01",
        "title": "C#编译与运行时：CLR/Mono/IL2CPP、执行流程",
        "practice": "解释一段 C# 程序到 Unity 运行时的路径，编写可运行控制台样例"
      },
      {
        "id": "CS-02",
        "title": "值类型与引用类型、struct/class、内存行为",
        "practice": "比较 struct/class 物品数据传递行为，修复意外共享状态"
      },
      {
        "id": "CS-03",
        "title": "参数传递、ref/out/in、readonly、nullable与边界",
        "practice": "实现血量修改的值传递/ref/out/in 版本，补全边界测试"
      },
      {
        "id": "CS-04",
        "title": "面向对象、接口/抽象类、继承与多态",
        "practice": "用接口表示伤害承受者，对比继承和组合的约束"
      },
      {
        "id": "CS-05",
        "title": "泛型、List/Dictionary/HashSet、迭代器",
        "practice": "实现 List/Dictionary 背包索引，验证重复 ID 与遍历更新问题"
      },
      {
        "id": "CS-06",
        "title": "委托、event、UnityEvent与订阅生命周期",
        "practice": "用 event 连接血量与 UI，验证订阅、退订和对象销毁"
      },
      {
        "id": "CS-07",
        "title": "Lambda、闭包、LINQ、隐藏分配与性能",
        "practice": "演示闭包捕获的行为，重写不必要的分配/遍历"
      },
      {
        "id": "CS-08",
        "title": "GC、装箱/拆箱、字符串与内存分配",
        "practice": "对比装箱与泛型写法，观察字符串操作引起的分配"
      },
      {
        "id": "CS-09",
        "title": "异常、属性、特性、反射及成本",
        "practice": "用自定义异常与属性验证非法道具配置，讨论反射代价"
      },
      {
        "id": "CS-10",
        "title": "协程、Task/async-await、线程与Unity主线程约束",
        "practice": "实现可取消的异步加载模拟，区分协程/Task/线程的用途"
      },
      {
        "id": "CS-11",
        "title": "序列化、配置驱动、存档数据与版本兼容",
        "practice": "为存档数据加入版本号和迁移规则，测试旧数据读取"
      },
      {
        "id": "CS-12",
        "title": "综合实战：小型背包+事件+存档；边界测试与重构",
        "practice": "完成背包+事件+存档，模拟需求变化并输出测试记录"
      }
    ]
  },
  {
    "id": "UNITY",
    "name": "Unity 引擎原理与实践",
    "count": 14,
    "lessons": [
      {
        "id": "UNITY-01",
        "title": "Unity执行模型、PlayerLoop、脚本生命周期和加载先后",
        "practice": "制作生命周期日志实验，观察 Awake/OnEnable/Start/Update 的条件和顺序"
      },
      {
        "id": "UNITY-02",
        "title": "Transform、矩阵、局部/世界坐标与层级",
        "practice": "用 Transform 实现父子节点坐标变换，验证非均匀缩放边界"
      },
      {
        "id": "UNITY-03",
        "title": "Update/FixedUpdate/LateUpdate、时间步与插值",
        "practice": "对比 Update/FixedUpdate 移动，画出帧率变化下的时间轨迹"
      },
      {
        "id": "UNITY-04",
        "title": "物理碰撞、触发器、Raycast与物理查询",
        "practice": "实现射线点击与触发器检测，复现 Layer/Collider 配置错误"
      },
      {
        "id": "UNITY-05",
        "title": "输入抽象、老Input与新Input System",
        "practice": "构建可替换的输入接口，分离输入设备和角色行为"
      },
      {
        "id": "UNITY-06",
        "title": "Animator、动画状态机、Timeline与根运动",
        "practice": "创建可切换角色动画状态机，验证 Root Motion 与逻辑移动"
      },
      {
        "id": "UNITY-07",
        "title": "UGUI、Canvas、TMP、UI Toolkit与事件系统",
        "practice": "制作 UI 列表和事件操作，定位 Canvas 重建或 Raycast 遮挡"
      },
      {
        "id": "UNITY-08",
        "title": "Prefab、ScriptableObject、序列化和资源引用",
        "practice": "用 Prefab/ScriptableObject 表示配置，演示引用与序列化陷阱"
      },
      {
        "id": "UNITY-09",
        "title": "Resources/AssetBundle/Addressables、同步异步和引用生命周期",
        "practice": "对比异步加载与卸载资源，记录引用与释放条件"
      },
      {
        "id": "UNITY-10",
        "title": "场景管理、Additive、跨场景数据及存档边界",
        "practice": "实现 Additive 场景切换，区分临时场景状态与永久存档"
      },
      {
        "id": "UNITY-11",
        "title": "URP、SRP、摄像机、渲染流程与基础Shader",
        "practice": "搭建 URP 场景观察渲染顺序，编写简单 Shader 效果"
      },
      {
        "id": "UNITY-12",
        "title": "协程、异步、Job/Burst、ECS思想及版本限制",
        "practice": "对比 Coroutine/Task/Job 的场景与限制，做一个小实验"
      },
      {
        "id": "UNITY-13",
        "title": "Editor工具、Gizmos、调试与Profiler定位",
        "practice": "编写 Editor 校验工具并用 Profiler/日志定位问题"
      },
      {
        "id": "UNITY-14",
        "title": "综合实战：可扩展的游戏功能纵切片与项目答辩",
        "practice": "完成可演示的玩法纵切片，交付结构图、操作说明与边界测试"
      }
    ]
  },
  {
    "id": "OS",
    "name": "操作系统与并发编程",
    "count": 9,
    "lessons": [
      {
        "id": "OS-01",
        "title": "程序、进程、线程与地址空间",
        "practice": "绘制游戏进程的线程与地址空间，辨析进程和线程隔离"
      },
      {
        "id": "OS-02",
        "title": "栈、堆、虚拟内存、分页与局部性",
        "practice": "模拟栈溢出与堆分配压力（安全受控），理解局部性"
      },
      {
        "id": "OS-03",
        "title": "操作系统调度、上下文切换与线程池",
        "practice": "实验线程池任务与创建线程的开销差异并解释调度"
      },
      {
        "id": "OS-04",
        "title": "并发与并行、竞争条件、临界区",
        "practice": "两线程更新同一个血量值，演示竞态及非确定性"
      },
      {
        "id": "OS-05",
        "title": "mutex/lock、死锁、锁粒度与饥饿",
        "practice": "修复竞态并分析锁顺序、死锁和锁粒度"
      },
      {
        "id": "OS-06",
        "title": "原子变量、内存可见性、基础内存模型",
        "practice": "用原子计数器替代锁方案，讨论复合操作的陷阱"
      },
      {
        "id": "OS-07",
        "title": "异步I/O与阻塞、任务调度、取消",
        "practice": "对比阻塞等待/异步回调，设计取消与超时逻辑"
      },
      {
        "id": "OS-08",
        "title": "生产者消费者、线程安全队列",
        "practice": "实现线程安全生产者消费者队列，处理结束/唤醒"
      },
      {
        "id": "OS-09",
        "title": "综合实战：游戏后台寻路任务与主线程安全回传",
        "practice": "实现后台寻路计算→主线程应用结果的演示，验证对象销毁边界"
      }
    ]
  },
  {
    "id": "NET",
    "name": "计算机网络与游戏同步",
    "count": 9,
    "lessons": [
      {
        "id": "NET-01",
        "title": "网络分层、IP、端口、Socket与数据包",
        "practice": "设计简单客户端到服务端消息格式，解释 IP/端口/Socket"
      },
      {
        "id": "NET-02",
        "title": "TCP连接、可靠性、顺序、粘包与应用层边界",
        "practice": "通过 TCP 发送多条消息，解决分帧并说明粘包问题"
      },
      {
        "id": "NET-03",
        "title": "UDP特性、可靠性设计与时延权衡",
        "practice": "设计 UDP 序列号/ACK 的简化可靠机制，分析延迟代价"
      },
      {
        "id": "NET-04",
        "title": "序列化、字节序、数据校验、协议版本",
        "practice": "定义玩家状态协议，验证版本号、字节序及非法数据"
      },
      {
        "id": "NET-05",
        "title": "网络Tick、快照、RPC、带宽与压缩",
        "practice": "实现按 Tick 更新与状态快照，估算每秒网络负载"
      },
      {
        "id": "NET-06",
        "title": "插值、外推、客户端预测与服务器校正",
        "practice": "比较客户端插值/预测/服务器校正，演示瞬移修正"
      },
      {
        "id": "NET-07",
        "title": "权威服务器、作弊与信任边界",
        "practice": "给出玩家伤害同步方案，识别客户端信任与作弊入口"
      },
      {
        "id": "NET-08",
        "title": "丢包、抖动、断线重连与状态恢复",
        "practice": "人为注入延迟、丢包、乱序和断线，设计恢复机制"
      },
      {
        "id": "NET-09",
        "title": "综合实战：本地双端移动同步与模拟网络异常",
        "practice": "完成双端位置同步实验和网络异常报告"
      }
    ]
  },
  {
    "id": "MATHGFX",
    "name": "游戏数学与计算机图形学",
    "count": 12,
    "lessons": [
      {
        "id": "MATHGFX-01",
        "title": "坐标、向量、距离、归一化与数值精度",
        "practice": "实现二维/三维移动方向归一化，观察零向量和浮点误差"
      },
      {
        "id": "MATHGFX-02",
        "title": "点积、叉积、投影、角度与方向判定",
        "practice": "用点积做视野夹角检测、叉积做左右方向判断"
      },
      {
        "id": "MATHGFX-03",
        "title": "矩阵、齐次坐标、TRS与变换顺序",
        "practice": "绘制局部到世界的 TRS 变换链，验证运算顺序影响"
      },
      {
        "id": "MATHGFX-04",
        "title": "欧拉角、四元数、旋转与万向节锁",
        "practice": "比较欧拉角与四元数插值，重现旋转顺序/万向节问题"
      },
      {
        "id": "MATHGFX-05",
        "title": "插值Lerp/Slerp、曲线、缓动与运动控制",
        "practice": "实现摄像机跟随缓动，对比 Lerp 时间步与速度语义"
      },
      {
        "id": "MATHGFX-06",
        "title": "碰撞几何、射线、AABB与空间查询",
        "practice": "实现射线/AABB 检测，考虑平行边与退化盒体"
      },
      {
        "id": "MATHGFX-07",
        "title": "相机、视图/投影矩阵与坐标空间转换",
        "practice": "通过屏幕射线选中世界对象，追踪坐标空间转换"
      },
      {
        "id": "MATHGFX-08",
        "title": "GPU渲染管线、顶点/片元着色器与光栅化",
        "practice": "绘制并验证顶点→片元渲染流程，实现一个基础 Shader"
      },
      {
        "id": "MATHGFX-09",
        "title": "纹理采样、UV、过滤与Mipmap",
        "practice": "修改纹理过滤与 Mipmap，分析不同分辨率表现"
      },
      {
        "id": "MATHGFX-10",
        "title": "光照、法线、PBR、颜色空间基础",
        "practice": "实现简单光照响应并解释法线空间和颜色空间"
      },
      {
        "id": "MATHGFX-11",
        "title": "深度、透明、混合、剔除与Overdraw",
        "practice": "设置透明渲染顺序，排查深度、剔除和 Overdraw"
      },
      {
        "id": "MATHGFX-12",
        "title": "综合实战：自制可解释的渲染/运动效果并分析边界",
        "practice": "完成一种游戏运动/扫光效果，提交公式、性能和边界说明"
      }
    ]
  },
  {
    "id": "ARCH",
    "name": "软件设计与游戏系统架构",
    "count": 10,
    "lessons": [
      {
        "id": "ARCH-01",
        "title": "从需求到模块：职责、接口、依赖与耦合",
        "practice": "把“新增技能”需求拆分为职责和接口，标注模块依赖"
      },
      {
        "id": "ARCH-02",
        "title": "SOLID、组合优于继承的条件及反例",
        "practice": "重构巨型 Player 类，讨论组合、继承及反例"
      },
      {
        "id": "ARCH-03",
        "title": "状态机、策略模式与游戏行为建模",
        "practice": "设计敌人待机/追击/攻击状态机，处理状态打断和优先级"
      },
      {
        "id": "ARCH-04",
        "title": "观察者/事件总线：生命周期、错误与调试成本",
        "practice": "实现血量事件到 UI/音效/任务系统，处理监听生命周期"
      },
      {
        "id": "ARCH-05",
        "title": "工厂、对象池、服务定位与依赖注入取舍",
        "practice": "比较工厂/对象池/依赖注入，解释是否适合小团队项目"
      },
      {
        "id": "ARCH-06",
        "title": "配置驱动、ScriptableObject、版本兼容",
        "practice": "将技能参数外置为配置，验证配置迁移与运行时修改"
      },
      {
        "id": "ARCH-07",
        "title": "战斗/技能系统的组合、扩展及表现分离",
        "practice": "设计可插拔技能效果与表现层，新增技能不改原有核心分支"
      },
      {
        "id": "ARCH-08",
        "title": "剧情/存档系统的状态边界、一致性与迁移",
        "practice": "梳理剧情状态与存档边界，模拟跨版本读档恢复"
      },
      {
        "id": "ARCH-09",
        "title": "ECS与面向对象架构对比、何时不该使用",
        "practice": "针对 10000 实体讨论 ECS 与普通对象系统取舍，不盲目引入"
      },
      {
        "id": "ARCH-10",
        "title": "综合系统设计：需求变更、性能约束、设计评审与重构",
        "practice": "完成技能/背包/存档任选系统设计，经历两轮需求变更与评审"
      }
    ]
  },
  {
    "id": "PERF",
    "name": "游戏性能分析与优化",
    "count": 10,
    "lessons": [
      {
        "id": "PERF-01",
        "title": "帧预算、CPU/GPU瓶颈与目标平台差异",
        "practice": "为目标设备定义 FPS 和帧预算，解释 CPU/GPU 主瓶颈"
      },
      {
        "id": "PERF-02",
        "title": "Profiler、Timeline/Hierarchy、Frame Debugger与测量误差",
        "practice": "采集 Profiler 时间线并设计可重复基线，标注噪声与误差"
      },
      {
        "id": "PERF-03",
        "title": "托管内存、GC Alloc、对象池的收益边界",
        "practice": "制造 GC Alloc 热点，对比缓存、复用、对象池并评估收益"
      },
      {
        "id": "PERF-04",
        "title": "脚本更新、数据访问、缓存与CPU热点",
        "practice": "优化上千实体的更新逻辑，对比按帧访问与事件驱动"
      },
      {
        "id": "PERF-05",
        "title": "DrawCall、Batching、SRP Batcher、Instancing取舍",
        "practice": "比较 SRP Batcher、合批与 Instancing 场景，记录 DrawCall"
      },
      {
        "id": "PERF-06",
        "title": "GPU瓶颈：Overdraw、Fill Rate、纹理与Shader",
        "practice": "制造透明叠层与复杂 Shader GPU 压力，分析 Overdraw"
      },
      {
        "id": "PERF-07",
        "title": "资源加载、常驻内存、压缩与异步卸载",
        "practice": "模拟资源加载尖峰，调整异步加载、卸载和缓存策略"
      },
      {
        "id": "PERF-08",
        "title": "物理、动画、UI重建的性能分析",
        "practice": "定位物理/Animator/Canvas 重建热点，选择针对性调整"
      },
      {
        "id": "PERF-09",
        "title": "移动端热降频、分辨率、帧率与测试矩阵",
        "practice": "在移动端不同目标帧率/画质下建立测试矩阵（无设备则模拟说明）"
      },
      {
        "id": "PERF-10",
        "title": "完整性能实验：基线-定位-改进-复测-报告",
        "practice": "提交完整性能报告：假设→测量→瓶颈→优化→复测→代价"
      }
    ]
  },
  {
    "id": "ENG",
    "name": "软件工程、测试与工具链",
    "count": 9,
    "lessons": [
      {
        "id": "ENG-01",
        "title": "构建流程：预处理/编译/链接、程序集与Unity打包",
        "practice": "拆解 C++ 与 Unity 构建日志，定位不同阶段错误"
      },
      {
        "id": "ENG-02",
        "title": "Git分支、提交、rebase/merge与冲突处理",
        "practice": "模拟双人开发分支冲突并完成安全合并、恢复和提交"
      },
      {
        "id": "ENG-03",
        "title": "断点、调用栈、变量监视、条件断点",
        "practice": "用断点、单步、调用栈定位一个故意埋入的逻辑 Bug"
      },
      {
        "id": "ENG-04",
        "title": "日志、错误复现、二分定位与异常处理",
        "practice": "将偶发错误转成可稳定复现步骤并补充结构化日志"
      },
      {
        "id": "ENG-05",
        "title": "单元测试、集成测试、PlayMode/EditMode",
        "practice": "为背包逻辑编写单元测试与 Unity EditMode/PlayMode 测试"
      },
      {
        "id": "ENG-06",
        "title": "代码审查、可读性、静态分析与重构",
        "practice": "审查一段低质量代码并重构，保留行为等价证据"
      },
      {
        "id": "ENG-07",
        "title": "Unity编辑器工具、自动化资源检查",
        "practice": "开发 Unity Editor 批量检查资源命名/缺失引用的小工具"
      },
      {
        "id": "ENG-08",
        "title": "CI/CD、构建脚本、版本与发布产物",
        "practice": "建立基础 CI 自动测试与构建脚本，管理构建产物"
      },
      {
        "id": "ENG-09",
        "title": "综合实践：给游戏模块加入测试、自动检查与交接文档",
        "practice": "交付带测试、检查、调试说明和交接文件的游戏模块"
      }
    ]
  },
  {
    "id": "INTERVIEW",
    "name": "游戏客户端笔试面试与项目复盘",
    "count": 12,
    "lessons": [
      {
        "id": "INTERVIEW-01",
        "title": "入学诊断：语言/算法/引擎/项目能力基线",
        "practice": "完成 C++/算法/Unity 基线题组，记录未评估项与难度"
      },
      {
        "id": "INTERVIEW-02",
        "title": "C++/C#高频知识口述与代码追问",
        "practice": "口述 C++/C# 高频概念，追问边界并手写小函数"
      },
      {
        "id": "INTERVIEW-03",
        "title": "算法限时手写与错误分析",
        "practice": "完成限时算法题，保留代码、用时、测试覆盖与复盘"
      },
      {
        "id": "INTERVIEW-04",
        "title": "操作系统/网络深度追问",
        "practice": "回答线程、锁、TCP/UDP、同步异常场景并画流程"
      },
      {
        "id": "INTERVIEW-05",
        "title": "Unity渲染/生命周期/资源/性能口述",
        "practice": "解释 Unity 生命周期、资源、渲染和性能定位案例"
      },
      {
        "id": "INTERVIEW-06",
        "title": "游戏架构系统设计：技能/背包/存档/任务",
        "practice": "白板设计技能/背包/任务系统，经历新增需求约束"
      },
      {
        "id": "INTERVIEW-07",
        "title": "实际项目一：tlldhx需求-实现-问题-结果复盘",
        "practice": "从真实项目中选一个自己实现的功能，提供问题—方案—结果证据"
      },
      {
        "id": "INTERVIEW-08",
        "title": "实际项目二：技术Demo选择与性能指标",
        "practice": "挑选技术 Demo 的一项实测指标，讲清测量与可复现性"
      },
      {
        "id": "INTERVIEW-09",
        "title": "工具与AI Agent项目：工程化证据与风险",
        "practice": "用工具或 AI 辅助研发案例解释权限、正确性、回退与成本"
      },
      {
        "id": "INTERVIEW-10",
        "title": "技术一面模拟：知识+编程+项目",
        "practice": "模拟技术一面：知识＋编码＋项目，依据证据评分"
      },
      {
        "id": "INTERVIEW-11",
        "title": "技术二面模拟：系统设计、性能、协作",
        "practice": "模拟技术二面：系统设计＋性能＋协作冲突，依据证据评分"
      },
      {
        "id": "INTERVIEW-12",
        "title": "能力档案复盘：差距优先级和下次面试计划",
        "practice": "整理掌握矩阵与实习求职差距，确定下阶段补强任务"
      }
    ]
  }
];
