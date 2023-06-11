<script lang="ts">
	import Chanakan from '$lib/assets/pfp.jpeg';
	import Logo from '$lib/assets/logo.png';
</script>

<nav class="fixed w-screen mix-blend-difference text-white">
	<div class="p-4 flex justify-between items-center">
		<h1 class="text-2xl font-serif">2CDTI</h1>
		<div class="menu text-2xl">
			<span>Home</span>
		</div>
	</div>
</nav>

<div class="h-screen mx-auto">
	<div class="pt-16">
		<hr class="border-black border-[1px]" />
		<div class="bg-[antiquewhite] py-8">
			<div class="flex flex-col md:flex-row-reverse md:items-center justify-between mx-8">
				<div>
					<img src={Logo} class="border-2 w-96 border-black" />
				</div>
				<div class="flex flex-col gap-y-4">
					<span class="text-7xl font-serif font-semibold">2CDTI</span>
					<span class="slogan text-xl">ไม่สร้างความหวังและไม่ทำให้ผิดหวัง</span>
					<ul class="list-disc text-lg ml-4">
						<li>ใส่</li>
						<li>นโยบาย</li>
						<li>ตรงนี้</li>
						<li>ตรงนู้น</li>
						<li>เลือกเถอะกุเหนื่อยแล้ว</li>
					</ul>
					<div class="flex items-center flex-row gap-x-4">
						<button class="btn bg-white border-2 border-black h-12 w-32">ใส่</button>
						<button class="btn bg-white border-2 border-black h-12 w-32">อะไรดีจ๊ะ</button>
					</div>
				</div>
			</div>
		</div>
		<hr class="border-black border-[1px]" />
		<div class="mt-8 flex flex-col items-center">
			<span class="text-3xl font-serif font-bold">Members</span>
			<div class="grid md:grid-cols-3 gap-x-8 gap-y-8 mt-8">
				<img class="border-black border-2 w-80" alt="Chanakan Mungtin" src={Chanakan} />
				<img class="border-black border-2 w-80" alt="Chanakan Mungtin" src={Chanakan} />
				<img class="border-black border-2 w-80" alt="Chanakan Mungtin" src={Chanakan} />
			</div>
		</div>
	</div>
</div>
