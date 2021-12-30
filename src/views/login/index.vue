<template>
	<div class="container">
		<img src="@/assets/login/bg.png" class="wave" />
		<div class="img">
			<img src="@/assets/login/illustration.svg" />
		</div>
		<div class="login-box">
			<div class="login-form">
				<h2>SuperCuteXiaoSi</h2>
				<div class="input-group user">
					<SvgIcon class-name="icon" name="iEL-avatar"></SvgIcon>
					<div>
						<h5>用户名</h5>
						<input
							v-model="user"
							type="text"
							class="input"
							@focus="onUserFocus"
							@blur="onUserBlur"
						/>
					</div>
				</div>
				<div class="input-group pwd">
					<SvgIcon class-name="icon" name="password"></SvgIcon>

					<div>
						<h5>密码</h5>
						<input
							v-model="pwd"
							type="password"
							class="input"
							@focus="onPwdFocus"
							@blur="onPwdBlur"
						/>
					</div>
				</div>
				<button class="btn" @click="onLogin">登录</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'

import { ref } from 'vue'
import { addClass, removeClass } from '@/utils/operate'

// eslint-disable-next-line vue/return-in-computed-property

let user = ref('')
let pwd = ref('')

const onLogin = (): void => {
	// storageSession.setItem('info', {
	// 	username: 'admin',
	// 	accessToken: 'eyJhbGciOiJIUzUxMiJ9.test',
	// })
	// initRouter('admin').then(() => {})
	// router.push('/')
}

function onUserFocus() {
	addClass(document.querySelector('.user'), 'focus')
}

function onUserBlur() {
	if (user.value.length === 0)
		removeClass(document.querySelector('.user'), 'focus')
}

function onPwdFocus() {
	addClass(document.querySelector('.pwd'), 'focus')
}

function onPwdBlur() {
	if (pwd.value.length === 0)
		removeClass(document.querySelector('.pwd'), 'focus')
}
</script>

<style lang="scss" scoped>
.wave {
	position: fixed;
	height: 100%;
	left: 0;
	bottom: 0;
	z-index: -1;
}

.container {
	width: 100vw;
	height: 100vh;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 18rem;
	padding: 0 2rem;
}

.img {
	display: flex;
	justify-content: flex-end;
	align-items: center;
}

.img img {
	width: 500px;
}

.login-box {
	display: flex;
	align-items: center;
	text-align: center;
}

.login-form {
	width: 360px;
}

.avatar {
	width: 350px;
	height: 80px;
}

.login-form h2 {
	margin: 15px 0;
	color: #999;
	font: bold 200% Consolas, Monaco, monospace;
}

.input-group {
	position: relative;
	display: grid;
	grid-template-columns: 7% 93%;
	margin: 25px 0;
	padding: 5px 0;
	border-bottom: 2px solid #d9d9d9;
}

.input-group:nth-child(1) {
	margin-bottom: 4px;
}

.input-group::before,
.input-group::after {
	content: '';
	position: absolute;
	bottom: -2px;
	width: 0;
	height: 2px;
	background-color: #c5d3f7;
	transition: 0.5s;
}

.input-group::after {
	right: 50%;
}

.input-group::before {
	left: 50%;
}

.icon {
	color: #d9d9d9;
	font-size: 22px;
	transition: 0.5s;
	display: flex;
	justify-content: center;
	align-items: center;
}

.input-group > div {
	position: relative;
	height: 45px;
}

.input-group > div > h5 {
	position: absolute;
	left: 10px;
	top: 50%;
	transform: translateY(-50%);
	color: #d9d9d9;
	font-size: 18px;
	transition: 0.3s;
	margin: 0;
	padding: 0;
}

.input-group.focus .icon {
	color: #5392f0;
}

.input-group.focus div h5 {
	top: -5px;
	font-size: 15px;
}

.input-group.focus::after,
.input-group.focus::before {
	width: 50%;
}

.input {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	border: none;
	outline: none;
	background: none;
	padding: 0.5rem 0.7rem;
	font-size: 1.2rem;
	color: #555;
	font-family: 'Roboto', sans-serif;
}

a {
	display: block;
	text-align: right;
	text-decoration: none;
	color: #999;
	font-size: 0.9rem;
	transition: 0.3s;
}

a:hover {
	color: #5392f0;
}

.btn {
	display: block;
	width: 100%;
	height: 50px;
	border-radius: 25px;
	margin: 1rem 0;
	font-size: 1.2rem;
	outline: none;
	border: none;
	background-image: linear-gradient(to right, #{$mianColor}, #{$subColor});
	cursor: pointer;
	color: #fff;
	text-transform: uppercase;
	font-family: 'Roboto', sans-serif;
	background-size: 200%;
	transition: 0.5s;
}

.btn:hover {
	background-position: center;
}

.copyright {
	position: absolute;
	width: 100%;
	height: 50px;
	bottom: 2px;
	color: #5392f0;
	text-align: center;
	font-size: 18px;
	font-family: 'Roboto', sans-serif;
}

@media screen and (max-width: 1080px) {
	.container {
		grid-gap: 9rem;
	}
}

@media screen and (max-width: 1024px) {
	.login-form {
		width: 290px;
	}

	.login-form h2 {
		font-size: 2.4rem;
		margin: 8px 0;
	}

	.img img {
		width: 360px;
	}

	.avatar {
		width: 280px;
		height: 80px;
	}
}

@media screen and (max-width: 768px) {
	.wave {
		display: none;
	}

	.img {
		display: none;
	}

	.container {
		grid-template-columns: 1fr;
	}

	.login-box {
		justify-content: center;
	}
}
</style>
