<template>
	<div class="wrapper-content wrapper-content--fixed">
		<section class="demo">
			<div class="demo-content">
				<div class="container">
					<h2>In this App:</h2>
					<div class="main-div">
						<ul class="ul-line">
							<li>Working with Vue-Router</li>
							<li>Creating dynamic routes</li>
							<li>Store and interact with data form Vuex</li>
							<li>Lazy content loading</li>
							<li>Preloader and date update</li>
							<li>Storing API data in Vuex</li>
						</ul>
						<img src="../assets/img/logo/1184px-Vue.js_Logo_2.svg.png" alt="" />
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<style lang="scss" scoped>
.wrapper-content {
	// height: 500vh;
	justify-content: center;
}
.demo {
	margin: 0 auto;
	font-size: 1.2rem;
	width: 100%;
	h2 {
		font-size: 1.6rem;
		padding-bottom: 0.66rem;
		text-align: center;
	}
	&-content {
		padding: 40px 0;
		background-color: #fff;
	}
	.ul-line li {
		text-align: left;
		position: relative;
		list-style: none;
		display: flex;
		padding-left: 0.625rem;
	}
	.ul-line li::before {
		content: "\2013";
		display: block;
		margin-right: 0.625rem;
	}
}
.main-div {
	display: flex;
	justify-content: space-around;
	align-items: center;
}
img {
	width: 200px;
}

@media (max-width: 400px) {
	img {
      margin-top: 20px;
	}
	.main-div {
      flex-direction: column;
	}
}
</style>