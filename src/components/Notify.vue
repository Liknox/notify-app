   <template>
	<table>
		<transition-group name="list" tag="tbody">
			<tr v-for="message in messages1" :key="message.title">
				<td>
					<span>{{ message.title }}</span>
				</td>
			</tr>
			<tr v-for="message in messages2" :key="message.title" v-if="pat">
				<td>
					<span>{{ message.title }}</span>
				</td>
			</tr>
		</transition-group>
		<button class="btn btnPrimary" @click="loadMore">Load more</button>
	</table>
</template>

<script>
export default {
   data() {
      return {
         pat: false
      }
   },
	props: {
		messages1: {
			type: Array,
			required: true,
		},
		messages2: {
			type: Array,
			required: true,
		},
	},
	computed: {},
	methods: {
		loadMore() {
        this.pat = true
		},
	},
}
</script>

<style lang="scss" scoped>

span {
   font-size: 16px !important;
}

table {
	text-align: center;
}
td {
	display: flex;
	justify-content: space-between;
	padding: 12px 6px;
	font-size: 14px;
}

/* Animation */
.list-item {
	display: inline-block;
	margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
	transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
	opacity: 0;
	transform: translateY(30px);
}

button {
	margin-top: 20px;
	&.btnDisabled {
		cursor: default;
		opacity: 0.6;
	}
}
</style>
