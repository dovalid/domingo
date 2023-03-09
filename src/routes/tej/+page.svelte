<script>
	import banner from '$lib/images/banner.jpg';
	import logo from '$lib/images/logo.jpg';
</script>

<section class="bg-[#423f3f] md:rounded-2xl md:mt-14 overflow-hidden">
	<img src={banner} />
	<div class="relative w-full flex justify-center items-center mb-14">
		<img src={logo} class="rounded-full absolute w-36  border-4 border-[#423f3f]" />
	</div>
	<div class="p-6 md:p-8 w-full">
		<h1 class="text-center font-bold text-2xl mb-6">Tejfakasztó Debütkoncert POAP</h1>
		<p class="text-center mb-10">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
			been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
			galley of type and scrambled it to make a type specimen book. It has survived not only five
			centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
		</p>
		<form method="POST" class="inline-block flex items-end">
			<label class="w-full"
				><!-- Add meg az emailed! -->
				<input
					required
					type="email"
					name="email"
					placeholder="jofejvagyok@gmail.com"
					class="rounded-lg block h-12  mt-1 w-full bg-[#282727] border-[#3f3e3e]"
				/>
			</label>
			<button class="rounded-lg px-5 h-12 bg-[#927470] ml-2">Mehet</button>
		</form>
	</div>
</section>
