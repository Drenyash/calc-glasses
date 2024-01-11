<script>
    export default {
        name: 'BackBuilder',
        props: {
            title: String,
            description: String,
            isCentered: Boolean
        },
        methods: {
            setValue(event, key, index) {
                const data = {
                    val: +event.target.value,
                    key,
                    index
                }
                this.$store.commit('setTabArray', data);

            },
            getInputValue(key, index) {
                const arr = this.$store.getters.getTabArray(key);
                return arr[index];
            },
            setInputValue(event) {
                const data = {
                    val: +event.target.value,
                    key: event.target.getAttribute('data-key'),
                    index: +event.target.getAttribute('data-index')
                }

                this.$store.commit('setTabArray', data);
            }
        },
        computed: {
            height: {
                get() {
                    return this.$store.getters.getTabValue('height');
                },
                set(newValue) {
                    const data = {
                        key: 'height',
                        value: +newValue
                    }
                    this.$store.commit('setTabValue', data);
                }
            },
            width: {
                get() {
                    return this.$store.getters.getTabValue('width');
                },
                set(newValue) {
                    const data = {
                        key: 'width',
                        value: +newValue
                    }
                    this.$store.commit('setTabValue', data);
                }
            },
            padding: {
                get() {
                    return this.$store.getters.getTabValue('padding');
                },
                set(newValue) {
                    const data = {
                        key: 'padding',
                        value: +newValue
                    }
                    this.$store.commit('setTabValue', data);
                }
            },
            drillingsLength: {
                get() {
                    return this.$store.getters.getTabValue('drilling');
                },
            },
            millingsLength: {
                get() {
                    return this.$store.getters.getTabValue('milling');
                },
            },
            millings: {
                get() {
                    return this.$store.getters.getTabArray('milling');
                },
            },
            drillings: {
                get() {
                    return this.$store.getters.getTabArray('drilling');
                },
                set(e) {
                    console.log(e);
                }
            },
            viewbox() {
                if (this.drillingsLength === 3 || this.drillingsLength === 4) return '0 0 309 275';
                return '0 0 309 240';
            },
            sendData() {
                this.$store.dispatch('sendClearData');
            }
        },
        mounted() {
        }
    }
</script>

<template>
    <div class="f-wrapper">
        <p class="f-title">
            Обратная часть:
        </p>
        <svg class="f-svg" :viewBox="viewbox">
            <rect x="41" y="41" width="267" height="189" fill="#EDEFEF" stroke="#2E2E2E" stroke-width="2"/>
            <rect x="75.5" y="75.5" width="198" height="120" fill="white" stroke="#C1C1C1"/>
            <path d="M40 15L45 17.8868L45 12.1132L40 15ZM44.5 15.5L116 15.5L116 14.5L44.5 14.5L44.5 15.5Z"
                  fill="#00B152"/>
            <path d="M309 15L304 12.1132V17.8868L309 15ZM234 15.5H304.5V14.5H234V15.5Z" fill="#00B152"/>
            <path d="M15 231L17.8868 226L12.1132 226L15 231ZM15.5 226.5L15.5 190L14.5 190L14.5 226.5L15.5 226.5Z"
                  fill="#00B152"/>
            <path d="M15 40L12.1133 45L17.8868 45L15 40ZM15.5 80L15.5 44.5L14.5 44.5L14.5 80L15.5 80Z" fill="#00B152"/>
            <!-- Ширина -->
            <foreignObject x="132.5" y="0.5" width="85" height="29">
                <input class="f-svg__field" type="number" v-model="width" v-on:blur="sendData">
            </foreignObject>
            <!-- Высота -->
            <foreignObject x="0.5" y="177.5" width="85" height="29" transform="rotate(-90 0.5 177.5)">
                <input class="f-svg__field" type="number" v-model="height" v-on:blur="sendData">
            </foreignObject>
            <g v-if="drillingsLength===1">
                <path d="M64 166H107V149" stroke="#2E2E2E"/>
                <foreignObject x="75.5" y="120.5" width="63" height="29">
                    <input class="f-svg__field" type="number" v-model="padding" v-on:blur="sendData">
                </foreignObject>
                <circle cx="58" cy="166" r="5.5" fill="white" stroke="#00B152"/>
                <circle cx="58" cy="166" r="2" fill="#00B152"/>
                <foreignObject x="75.5" y="184.81" width="63" height="29">
                    <input class="f-svg__field" type="number"
                           v-bind:value="getInputValue('drilling', 0)" v-on:input="setInputValue" data-key="drilling" data-index="0" v-on:blur="sendData">
                </foreignObject>
                <path d="M58 200.552L75 200.552" stroke="#2E2E2E"/>
                <path d="M58 227L60.8868 222L55.1132 222L58 227ZM58 168L55.1132 173L60.8867 173L58 168ZM58.5 222.5L58.5 172.5L57.5 172.5L57.5 222.5L58.5 222.5Z"
                      fill="#2E2E2E"/>
                <path d="M44 166L49 168.887L49 163.113L44 166ZM48.5 166.5L56 166.5L56 165.5L48.5 165.5L48.5 166.5Z"
                      fill="#2E2E2E"/>
            </g>
            <g v-else-if="drillingsLength===2">
                <circle cx="58" cy="104" r="5.5" fill="white" stroke="#00B152"/>
                <circle cx="58" cy="104" r="2" fill="#00B152"/>
                <circle cx="58" cy="166" r="5.5" fill="white" stroke="#00B152"/>
                <circle cx="58" cy="166" r="2" fill="#00B152"/>
                <path d="M64 166H106" stroke="#2E2E2E"/>
                <path d="M43 166L48 168.887L48 163.113L43 166ZM47.5 166.5L56 166.5L56 165.5L47.5 165.5L47.5 166.5Z"
                      fill="#2E2E2E"/>
                <foreignObject x="75.5" y="185.5" width="63" height="29">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('drilling', 0)" v-on:input="setInputValue" data-key="drilling" data-index="0" v-on:blur="sendData">
                </foreignObject>
                <path d="M58 200H75" stroke="#2E2E2E"/>
                <path d="M58 226L60.8868 221L55.1132 221L58 226ZM58 168L55.1132 173L60.8867 173L58 168ZM58.5 221.5L58.5 172.5L57.5 172.5L57.5 221.5L58.5 221.5Z"
                      fill="#2E2E2E"/>
                <foreignObject x="106.5" y="151.5" width="63" height="29">
                    <input class="f-svg__field" type="number" v-model="padding" v-on:blur="sendData">
                </foreignObject>
                <foreignObject x="75.5" y="120.5" width="63" height="29">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('drilling', 1)" v-on:input="setInputValue" data-key="drilling" data-index="1" v-on:blur="sendData">
                </foreignObject>
                <path d="M58 135H75" stroke="#2E2E2E"/>
                <path d="M58 164L60.8868 159L55.1132 159L58 164ZM58 106L55.1133 111L60.8868 111L58 106ZM58.5 159.5L58.5 110.5L57.5 110.5L57.5 159.5L58.5 159.5Z"
                      fill="#2E2E2E"/>
            </g>
            <g v-else-if="drillingsLength===3">
                <circle cx="58" cy="73" r="5.5" fill="white" stroke="#00B152"/>
                <circle cx="58" cy="73" r="2" fill="#00B152"/>
                <circle cx="58" cy="135" r="5.5" fill="white" stroke="#00B152"/>
                <circle cx="58" cy="135" r="2" fill="#00B152"/>
                <circle cx="58" cy="197" r="5.5" fill="white" stroke="#00B152"/>
                <circle cx="58" cy="197" r="2" fill="#00B152"/>
                <foreignObject x="75.5" y="84.5" width="63" height="29">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('drilling', 2)" v-on:input="setInputValue" data-key="drilling" data-index="2" v-on:blur="sendData">
                </foreignObject>
                <path d="M58 99.4073L75 99.4073" stroke="#2E2E2E"/>
                <path d="M58 133L60.8868 128L55.1132 128L58 133ZM58 75L55.1133 80L60.8868 80L58 75ZM58.5 128.5L58.5 79.5L57.5 79.5L57.5 128.5L58.5 128.5Z"
                      fill="#2E2E2E"/>
                <foreignObject x="75.5" y="151.5" width="63" height="29">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('drilling', 1)" v-on:input="setInputValue" data-key="drilling" data-index="1" v-on:blur="sendData">
                </foreignObject>
                <path d="M58 166L75 166" stroke="#2E2E2E"/>
                <path d="M58 195L60.8868 190L55.1132 190L58 195ZM58 137L55.1133 142L60.8868 142L58 137ZM58.5 190.5L58.5 141.5L57.5 141.5L57.5 190.5L58.5 190.5Z"
                      fill="#2E2E2E"/>
                <foreignObject x="75.5" y="193.5" width="63" height="29">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('drilling', 0)" v-on:input="setInputValue" data-key="drilling" data-index="0" v-on:blur="sendData">
                </foreignObject>
                <path d="M58 216L75 216" stroke="#2E2E2E"/>
                <path d="M58 227L60.8868 222L55.1132 222L58 227ZM58 199L55.1132 204L60.8868 204L58 199ZM58.5 222.5L58.5 203.5L57.5 203.5L57.5 222.5L58.5 222.5Z"
                      fill="#2E2E2E"/>
                <path d="M56 197L51 194.113L51 199.887L56 197ZM32 197L32 196.5L31.5 196.5L31.5 197L32 197ZM32 253.389L31.5 253.389L31.5 253.889L32 253.889L32 253.389ZM51.5 196.5L32 196.5L32 197.5L51.5 197.5L51.5 196.5ZM31.5 197L31.5 253.389L32.5 253.389L32.5 197L31.5 197ZM32 253.889L75 253.889L75 252.889L32 252.889L32 253.889Z"
                      fill="#2E2E2E"/>
                <foreignObject x="75.5" y="238.5" width="63" height="29">
                    <input class="f-svg__field" type="number" v-model="padding" v-on:blur="sendData">
                </foreignObject>
            </g>
            <g v-else-if="drillingsLength===4">

                <circle cx="58" cy="68.5" r="5.5" fill="white" stroke="#00B152"/>
                <circle cx="58" cy="68.5" r="2" fill="#00B152"/>
                <circle cx="58" cy="110.5" r="5.5" fill="white" stroke="#00B152"/>
                <circle cx="58" cy="110.5" r="2" fill="#00B152"/>
                <circle cx="58" cy="152.5" r="5.5" fill="white" stroke="#00B152"/>
                <circle cx="58" cy="152.5" r="2" fill="#00B152"/>
                <circle cx="58" cy="194.5" r="5.5" fill="white" stroke="#00B152"/>
                <circle cx="58" cy="194.5" r="2" fill="#00B152"/>
                <foreignObject x="75.5" y="74.5" width="63" height="29">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('drilling', 3)" v-on:input="setInputValue" data-key="drilling" data-index="3" v-on:blur="sendData">
                </foreignObject>
                <path d="M58 89.3473L75 89.3473" stroke="#2E2E2E"/>
                <path d="M58 109L60.8868 104H55.1132L58 109ZM58 70L55.1132 75H60.8868L58 70ZM58.5 104.5V74.5H57.5V104.5H58.5Z"
                      fill="#2E2E2E"/>
                <foreignObject x="75.5" y="116.5" width="63" height="29">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('drilling', 2)" v-on:input="setInputValue" data-key="drilling" data-index="2" v-on:blur="sendData">
                </foreignObject>
                <path d="M58 131.347L75 131.347" stroke="#2E2E2E"/>
                <path d="M58 151L60.8868 146H55.1132L58 151ZM58 112L55.1132 117H60.8868L58 112ZM58.5 146.5V116.5H57.5V146.5H58.5Z"
                      fill="#2E2E2E"/>
                <path d="M56 195L51 192.113L51 197.887L56 195ZM32.5 195L32.5 194.5L32 194.5L32 195L32.5 195ZM32.5 253L32 253L32 253.5L32.5 253.5L32.5 253ZM51.5 194.5L32.5 194.5L32.5 195.5L51.5 195.5L51.5 194.5ZM32 195L32 253L33 253L33 195L32 195ZM32.5 253.5L75.5 253.5L75.5 252.5L32.5 252.5L32.5 253.5Z"
                      fill="#2E2E2E"/>

                <foreignObject x="75.5" y="238.5" width="63" height="29">
                    <input class="f-svg__field" type="number" v-model="padding">
                </foreignObject>
                <foreignObject x="75.5" y="194.5" width="63" height="29">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('drilling', 0)" v-on:input="setInputValue" data-key="drilling" data-index="0" v-on:blur="sendData">
                </foreignObject>
                <path d="M58 213L75 213" stroke="#2E2E2E"/>
                <path d="M58 225L60.8868 220L55.1133 220L58 225ZM58 196L55.1133 201L60.8868 201L58 196ZM58.5 220.5L58.5 200.5L57.5 200.5L57.5 220.5L58.5 220.5Z"
                      fill="#2E2E2E"/>

                <foreignObject x="75.5" y="158.5" width="63" height="29">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('drilling', 1)" v-on:input="setInputValue" data-key="drilling" data-index="1" v-on:blur="sendData">
                </foreignObject>
                <path d="M58 173L75 173" stroke="#2E2E2E"/>
                <path d="M58 192.5L60.8868 187.5L55.1132 187.5L58 192.5ZM58 154.5L55.1133 159.5L60.8868 159.5L58 154.5ZM58.5 188L58.5 159L57.5 159L57.5 188L58.5 188Z"
                      fill="#2E2E2E"/>
            </g>
            <g v-if="millingsLength===1">
                <circle cx="291" cy="184" r="8.5" fill="white" stroke="#00B152"/>
                <circle cx="291" cy="184" r="3" fill="#00B152"/>
                <foreignObject x="210.5" y="186.5" width="63" height="29">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('milling', 0)" v-on:input="setInputValue" data-key="milling" data-index="0" v-on:blur="sendData">
                </foreignObject>
                <path d="M273 208H291" stroke="#2E2E2E"/>
                <path d="M291 227L293.887 222L288.113 222L291 227ZM291 184L288.113 189L293.887 189L291 184ZM291.5 222.5L291.5 188.5L290.5 188.5L290.5 222.5L291.5 222.5Z"
                      fill="#2E2E2E"/>
            </g>
            <g v-else-if="millingsLength===2">
                <circle cx="291" cy="91.5" r="8.5" fill="white" stroke="#00B152"/>
                <circle cx="291" cy="91.5" r="3" fill="#00B152"/>
                <circle cx="291" cy="179.5" r="8.5" fill="white" stroke="#00B152"/>
                <circle cx="291" cy="179.5" r="3" fill="#00B152"/>
                <foreignObject x="210.5" y="120.5" width="63" height="29">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('milling', 1)" v-on:input="setInputValue" data-key="milling" data-index="1" v-on:blur="sendData">
                </foreignObject>
                <path d="M273 136H291" stroke="#2E2E2E"/>
                <foreignObject x="210.5" y="186.5" width="63" height="29">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('milling', 0)" v-on:input="setInputValue" data-key="milling" data-index="0" v-on:blur="sendData">
                </foreignObject>
                <path d="M273 208H291" stroke="#2E2E2E"/>
                <path d="M291 180L293.887 175L288.113 175L291 180ZM291 92L288.113 97L293.887 97L291 92ZM291.5 175.5L291.5 96.5L290.5 96.5L290.5 175.5L291.5 175.5Z"
                      fill="#2E2E2E"/>
                <path d="M291 227L293.887 222L288.113 222L291 227ZM291 180L288.113 185L293.887 185L291 180ZM291.5 222.5L291.5 184.5L290.5 184.5L290.5 222.5L291.5 222.5Z"
                      fill="#2E2E2E"/>
            </g>
            <g v-else-if="millingsLength===3">
                <circle cx="291" cy="97.5" r="8.5" fill="white" stroke="#00B152"/>
                <circle cx="291" cy="97.5" r="3" fill="#00B152"/>
                <circle cx="291" cy="135.5" r="8.5" fill="white" stroke="#00B152"/>
                <circle cx="291" cy="135.5" r="3" fill="#00B152"/>
                <circle cx="291" cy="173.5" r="8.5" fill="white" stroke="#00B152"/>
                <circle cx="291" cy="173.5" r="3" fill="#00B152"/>
                <path d="M291 135L293.887 130H288.113L291 135ZM291 98L288.113 103H293.887L291 98ZM291.5 130.5V102.5H290.5V130.5H291.5Z"
                      fill="#2E2E2E"/>
                <foreignObject x="210.5" y="193.5" width="63" height="28">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('milling', 0)" v-on:input="setInputValue" data-key="milling" data-index="0" v-on:blur="sendData">
                </foreignObject>
                <path d="M273 208H291" stroke="#2E2E2E"/>
                <path d="M291 173L293.887 168H288.113L291 173ZM291 136L288.113 141H293.887L291 136ZM291.5 168.5V140.5H290.5V168.5H291.5Z"
                      fill="#2E2E2E"/>
                <path d="M291 227L293.887 222L288.113 222L291 227ZM291 173L288.113 178L293.887 178L291 173ZM291.5 222.5L291.5 177.5L290.5 177.5L290.5 222.5L291.5 222.5Z"
                      fill="#2E2E2E"/>
                <foreignObject x="210.5" y="102.5" width="63" height="29">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('milling', 2)" v-on:input="setInputValue" data-key="milling" data-index="2" v-on:blur="sendData">
                </foreignObject>
                <path d="M273 117H291" stroke="#2E2E2E"/>
                <foreignObject x="210.5" y="139.5" width="63" height="29">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('milling', 1)" v-on:input="setInputValue" data-key="milling" data-index="1" v-on:blur="sendData">
                </foreignObject>
                <path d="M273 154H291" stroke="#2E2E2E"/>
            </g>
            <g v-else-if="millingsLength===4">
                <circle cx="291" cy="78.5" r="8.5" fill="white" stroke="#00B152"/>
                <circle cx="291" cy="78.5" r="3" fill="#00B152"/>
                <circle cx="291" cy="116.5" r="8.5" fill="white" stroke="#00B152"/>
                <circle cx="291" cy="116.5" r="3" fill="#00B152"/>
                <circle cx="291" cy="154.5" r="8.5" fill="white" stroke="#00B152"/>
                <circle cx="291" cy="154.5" r="3" fill="#00B152"/>
                <circle cx="291" cy="192.5" r="8.5" fill="white" stroke="#00B152"/>
                <circle cx="291" cy="192.5" r="3" fill="#00B152"/>
                <path d="M291 152L293.887 147L288.113 147L291 152ZM291 119L288.113 124L293.887 124L291 119ZM291.5 147.5L291.5 123.5L290.5 123.5L290.5 147.5L291.5 147.5Z"
                      fill="#2E2E2E"/>
                <path d="M291 190L293.887 185L288.113 185L291 190ZM291 157L288.113 162L293.887 162L291 157ZM291.5 185.5L291.5 161.5L290.5 161.5L290.5 185.5L291.5 185.5Z"
                      fill="#2E2E2E"/>
                <foreignObject x="210.5" y="83.5" width="63" height="29">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('milling', 3)" v-on:input="setInputValue" data-key="milling" data-index="3" v-on:blur="sendData">
                </foreignObject>
                <path d="M273 97H291" stroke="#2E2E2E"/>
                <foreignObject x="210.5" y="121.5" width="63" height="29">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('milling', 2)" v-on:input="setInputValue" data-key="milling" data-index="2" v-on:blur="sendData">
                </foreignObject>
                <path d="M273 136H291" stroke="#2E2E2E"/>
                <foreignObject x="210.5" y="157.5" width="63" height="29">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('milling', 1)" v-on:input="setInputValue" data-key="milling" data-index="1" v-on:blur="sendData">
                </foreignObject>
                <path d="M273 172H291" stroke="#2E2E2E"/>
                <foreignObject x="210.5" y="193.5" width="63" height="29">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('milling', 0)" v-on:input="setInputValue" data-key="milling" data-index="0" v-on:blur="sendData">
                </foreignObject>
                <path d="M273 208H291" stroke="#2E2E2E"/>
                <path d="M291 114L293.887 109L288.113 109L291 114ZM291 81L288.113 86L293.887 86L291 81ZM291.5 109.5L291.5 85.5L290.5 85.5L290.5 109.5L291.5 109.5Z"
                      fill="#2E2E2E"/>
                <path d="M291 227L293.887 222L288.113 222L291 227ZM291 195L288.113 200L293.887 200L291 195ZM291.5 222.5L291.5 199.5L290.5 199.5L290.5 222.5L291.5 222.5Z"
                      fill="#2E2E2E"/>
            </g>
            <g v-else-if="millingsLength===5">
                <circle cx="291" cy="69.5" r="8.5" fill="white" stroke="#00B152"/>
                <circle cx="291" cy="69.5" r="3" fill="#00B152"/>
                <circle cx="291" cy="102.5" r="8.5" fill="white" stroke="#00B152"/>
                <circle cx="291" cy="102.5" r="3" fill="#00B152"/>
                <circle cx="291" cy="135.5" r="8.5" fill="white" stroke="#00B152"/>
                <circle cx="291" cy="135.5" r="3" fill="#00B152"/>
                <circle cx="291" cy="168.5" r="8.5" fill="white" stroke="#00B152"/>
                <circle cx="291" cy="168.5" r="3" fill="#00B152"/>
                <circle cx="291" cy="201.5" r="8.5" fill="white" stroke="#00B152"/>
                <circle cx="291" cy="201.5" r="3" fill="#00B152"/>
                <foreignObject x="210.5" y="70.5" width="63" height="29">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('milling', 4)" v-on:input="setInputValue" data-key="milling" data-index="4" v-on:blur="sendData">
                </foreignObject>
                <path d="M273 85H291" stroke="#2E2E2E"/>
                <foreignObject x="210.5" y="104.5" width="63" height="29">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('milling', 3)" v-on:input="setInputValue" data-key="milling" data-index="3" v-on:blur="sendData">
                </foreignObject>
                <path d="M273 119H291" stroke="#2E2E2E"/>
                <foreignObject x="210.5" y="138.5" width="63" height="29">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('milling', 2)" v-on:input="setInputValue" data-key="milling" data-index="2" v-on:blur="sendData">
                </foreignObject>
                <path d="M273 153H291" stroke="#2E2E2E"/>
                <foreignObject x="210.5" y="170.5" width="63" height="29">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('milling', 1)" v-on:input="setInputValue" data-key="milling" data-index="1" v-on:blur="sendData">
                </foreignObject>
                <path d="M273 185H291" stroke="#2E2E2E"/>
                <foreignObject x="210.5" y="201.5" width="63" height="29">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('milling', 0)" v-on:input="setInputValue" data-key="milling" data-index="0" v-on:blur="sendData">
                </foreignObject>
                <path d="M273 216H291" stroke="#2E2E2E"/>
                <path d="M291 99.5L293.887 94.5L288.114 94.5L291 99.5ZM291 72.5L288.114 77.5L293.887 77.5L291 72.5ZM291 133L293.887 128L288.113 128L291 133ZM291 106L288.113 111L293.887 111L291 106ZM291 166L293.887 161L288.113 161L291 166ZM291 139L288.113 144L293.887 144L291 139ZM291 199L293.887 194L288.113 194L291 199ZM291 172L288.113 177L293.887 177L291 172ZM291.5 95L291.5 77L290.5 77L290.5 95L291.5 95ZM291.5 128.5L291.5 110.5L290.5 110.5L290.5 128.5L291.5 128.5ZM291.5 161.5L291.5 143.5L290.5 143.5L290.5 161.5L291.5 161.5ZM291.5 194.5L291.5 176.5L290.5 176.5L290.5 194.5L291.5 194.5Z"
                      fill="#2E2E2E"/>
                <path d="M291 227L293.887 222H288.113L291 227ZM291 204L288.113 209H293.887L291 204ZM291.5 222.5V208.5H290.5V222.5H291.5Z"
                      fill="#2E2E2E"/>
            </g>
            <g v-else-if="millingsLength===6">
                <circle cx="291" cy="65.5" r="8.5" fill="white" stroke="#00B152"/>
                <circle cx="291" cy="65.5" r="3" fill="#00B152"/>
                <circle cx="291" cy="93.5" r="8.5" fill="white" stroke="#00B152"/>
                <circle cx="291" cy="93.5" r="3" fill="#00B152"/>
                <circle cx="291" cy="121.5" r="8.5" fill="white" stroke="#00B152"/>
                <circle cx="291" cy="121.5" r="3" fill="#00B152"/>
                <circle cx="291" cy="149.5" r="8.5" fill="white" stroke="#00B152"/>
                <circle cx="291" cy="149.5" r="3" fill="#00B152"/>
                <circle cx="291" cy="177.5" r="8.5" fill="white" stroke="#00B152"/>
                <circle cx="291" cy="177.5" r="3" fill="#00B152"/>
                <circle cx="291" cy="205.5" r="8.5" fill="white" stroke="#00B152"/>
                <circle cx="291" cy="205.5" r="3" fill="#00B152"/>
                <path d="M291 147L293.887 142L288.113 142L291 147ZM291 124L288.113 129L293.887 129L291 124ZM291.5 142.5L291.5 128.5L290.5 128.5L290.5 142.5L291.5 142.5Z"
                      fill="#2E2E2E"/>
                <path d="M291 175L293.887 170L288.113 170L291 175ZM291 152L288.113 157L293.887 157L291 152ZM291.5 170.5L291.5 156.5L290.5 156.5L290.5 170.5L291.5 170.5Z"
                      fill="#2E2E2E"/>
                <path d="M291 203L293.887 198L288.113 198L291 203ZM291 180L288.113 185L293.887 185L291 180ZM291.5 198.5L291.5 184.5L290.5 184.5L290.5 198.5L291.5 198.5Z"
                      fill="#2E2E2E"/>
                <path d="M291 119L293.887 114L288.113 114L291 119ZM291 96L288.113 101L293.887 101L291 96ZM291.5 114.5L291.5 100.5L290.5 100.5L290.5 114.5L291.5 114.5Z"
                      fill="#2E2E2E"/>
                <foreignObject x="210.5" y="68.5" width="63" height="23">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('milling', 5)" v-on:input="setInputValue" data-key="milling" data-index="5" v-on:blur="sendData">
                </foreignObject>
                <path d="M273 80.0001H291" stroke="#2E2E2E"/>
                <foreignObject x="210.5" y="95.5" width="63" height="23">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('milling', 4)" v-on:input="setInputValue" data-key="milling" data-index="4" v-on:blur="sendData">
                </foreignObject>
                <path d="M273 107H291" stroke="#2E2E2E"/>
                <foreignObject x="210.5" y="123.5" width="63" height="23">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('milling', 3)" v-on:input="setInputValue" data-key="milling" data-index="3" v-on:blur="sendData">
                </foreignObject>
                <path d="M273 135H291" stroke="#2E2E2E"/>
                <foreignObject x="210.5" y="151.5" width="63" height="23">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('milling', 2)" v-on:input="setInputValue" data-key="milling" data-index="2" v-on:blur="sendData">
                </foreignObject>
                <path d="M273 163H291" stroke="#2E2E2E"/>
                <foreignObject x="210.5" y="179.5" width="63" height="23">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('milling', 1)" v-on:input="setInputValue" data-key="milling" data-index="1" v-on:blur="sendData">
                </foreignObject>
                <path d="M273 191H291" stroke="#2E2E2E"/>
                <foreignObject x="210.5" y="206.5" width="63" height="23">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('milling', 0)" v-on:input="setInputValue" data-key="milling" data-index="0" v-on:blur="sendData">
                </foreignObject>
                <path d="M273 218H291" stroke="#2E2E2E"/>
                <path d="M291 91.0001L293.887 86.0001L288.113 86.0001L291 91.0001ZM291 68.0001L288.113 73.0001L293.887 73.0001L291 68.0001ZM291.5 86.5001L291.5 72.5001L290.5 72.5001L290.5 86.5001L291.5 86.5001Z"
                      fill="#2E2E2E"/>
                <path d="M291 227L293.887 222L288.113 222L291 227ZM291 208L288.113 213L293.887 213L291 208ZM291.5 222.5L291.5 212.5H290.5L290.5 222.5L291.5 222.5Z"
                      fill="#2E2E2E"/>
            </g>
            <g v-else-if="millingsLength===7">
                <circle cx="291" cy="57.5" r="8.5" fill="white" stroke="#00B152"/>
                <circle cx="291" cy="57.5" r="3" fill="#00B152"/>
                <circle cx="291" cy="83.5" r="8.5" fill="white" stroke="#00B152"/>
                <circle cx="291" cy="83.5" r="3" fill="#00B152"/>
                <circle cx="291" cy="109.5" r="8.5" fill="white" stroke="#00B152"/>
                <circle cx="291" cy="109.5" r="3" fill="#00B152"/>
                <circle cx="291" cy="135.5" r="8.5" fill="white" stroke="#00B152"/>
                <circle cx="291" cy="135.5" r="3" fill="#00B152"/>
                <circle cx="291" cy="161.5" r="8.5" fill="white" stroke="#00B152"/>
                <circle cx="291" cy="161.5" r="3" fill="#00B152"/>
                <circle cx="291" cy="187.5" r="8.5" fill="white" stroke="#00B152"/>
                <circle cx="291" cy="187.5" r="3" fill="#00B152"/>
                <circle cx="291" cy="213.5" r="8.5" fill="white" stroke="#00B152"/>
                <circle cx="291" cy="213.5" r="3" fill="#00B152"/>
                <path d="M291 133L293.887 128L288.113 128L291 133ZM291 112L288.113 117L293.887 117L291 112ZM291.5 128.5L291.5 116.5L290.5 116.5L290.5 128.5L291.5 128.5Z"
                      fill="#2E2E2E"/>
                <path d="M291 159L293.887 154L288.113 154L291 159ZM291 138L288.113 143L293.887 143L291 138ZM291.5 154.5L291.5 142.5L290.5 142.5L290.5 154.5L291.5 154.5Z"
                      fill="#2E2E2E"/>
                <path d="M291 185L293.887 180L288.113 180L291 185ZM291 165L288.113 170L293.887 170L291 165ZM291.5 180.5L291.5 169.5L290.5 169.5L290.5 180.5L291.5 180.5Z"
                      fill="#2E2E2E"/>
                <path d="M291 107L293.887 102L288.113 102L291 107ZM291 86L288.113 91L293.887 91L291 86ZM291.5 102.5L291.5 90.5L290.5 90.5L290.5 102.5L291.5 102.5Z"
                      fill="#2E2E2E"/>
                <foreignObject x="210.5" y="59.5" width="63" height="23">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('milling', 6)" v-on:input="setInputValue" data-key="milling" data-index="6" v-on:blur="sendData">
                </foreignObject>
                <path d="M273 71H291" stroke="#2E2E2E"/>
                <foreignObject x="210.5" y="85.5" width="63" height="23">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('milling', 5)" v-on:input="setInputValue" data-key="milling" data-index="5" v-on:blur="sendData">
                </foreignObject>
                <path d="M273 97H291" stroke="#2E2E2E"/>
                <foreignObject x="210.5" y="111.5" width="63" height="23">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('milling', 4)" v-on:input="setInputValue" data-key="milling" data-index="4" v-on:blur="sendData">
                </foreignObject>
                <path d="M273 123H291" stroke="#2E2E2E"/>
                <foreignObject x="210.5" y="137.5" width="63" height="23">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('milling', 3)" v-on:input="setInputValue" data-key="milling" data-index="3" v-on:blur="sendData">
                </foreignObject>
                <path d="M273 149H291" stroke="#2E2E2E"/>
                <foreignObject x="210.5" y="163.5" width="63" height="23">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('milling', 2)" v-on:input="setInputValue" data-key="milling" data-index="2" v-on:blur="sendData">
                </foreignObject>
                <path d="M273 175H291" stroke="#2E2E2E"/>
                <foreignObject x="210.5" y="189.5" width="63" height="23">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('milling', 1)" v-on:input="setInputValue" data-key="milling" data-index="1" v-on:blur="sendData">
                </foreignObject>
                <path d="M273 200H291" stroke="#2E2E2E"/>
                <path d="M291 81L293.887 76L288.113 76L291 81ZM291 61L288.113 66L293.887 66L291 61ZM291.5 76.5L291.5 65.5L290.5 65.5L290.5 76.5L291.5 76.5Z"
                      fill="#2E2E2E"/>
                <path d="M291 211L293.887 206L288.113 206L291 211ZM291 190L288.113 195L293.887 195L291 190ZM291.5 206.5L291.5 194.5L290.5 194.5L290.5 206.5L291.5 206.5Z"
                      fill="#2E2E2E"/>
                <path d="M207 222H291" stroke="#2E2E2E"/>
                <foreignObject x="143.5" y="207.5" width="63" height="23">
                    <input class="f-svg__field" type="number" v-bind:value="getInputValue('milling', 0)" v-on:input="setInputValue" data-key="milling" data-index="0" v-on:blur="sendData">
                </foreignObject>
                <path d="M291 228L293.887 223L288.113 223L291 228ZM291 216L288.113 221L293.887 221L291 216ZM291.5 223.5L291.5 220.5L290.5 220.5L290.5 223.5L291.5 223.5Z"
                      fill="#2E2E2E"/>
            </g>
        </svg>
    </div>
</template>

<style lang="scss" scoped>
    .f-wrapper {
        background-color: $light;
        border: 1px solid #E5E5E5;
        padding: rem(20) rem(30) rem(30) rem(30);
    }

    .f-title {
        text-align: center;
        font-size: rem(20);
        margin-bottom: rem(20);
    }

    .f-svg {
        fill: none;
        width: 100%;
        height: auto;
        display: block;

        &__text {
            font-size: rem(13);
            font-family: $font-main;
        }

        &__field {
            width: 100%;
            height: 100%;
            display: block;
            padding: 0 rem(5);
            font-size: rem(13);
            border: 1px solid green;
            -moz-appearance: textfield;

            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                margin: 0;
                -webkit-appearance: none;
            }
        }
    }
</style>
