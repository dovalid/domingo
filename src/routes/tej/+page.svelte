<script>
	import banner from '$lib/images/banner.jpg';
	import poap from '$lib/images/poap.gif';
</script>

<svelte:head>
	<title>DOMINGO Tejfakasztó Debütkoncert POAP</title>
</svelte:head>

<section class="bg-[#232323] md:rounded-2xl md:mt-14 overflow-hidden shadow-md">
	<img src={banner} />
	<div class="relative w-full flex justify-center items-center mb-16">
		<img src={poap} class="rounded-full absolute w-36  border-4 border-[#423f3f] shadow-md" />
	</div>
	<div class="p-5 md:p-8 w-full">
		<h1 class="text-center font-bold text-2xl mb-6 font-[Anton] text-[#9D7B77]">
			Debütkoncert POAP
		</h1>
		<p class="text-center mb-4 font-normal text-[#E1D5CA] font-[Manrope] ">
			Ez itt egy POAP NFT, egy digitális plecsni arról, hogy részt vettél az első koncertünkön. Ha
			megszerzed, később <b> mindenféle jóságokhoz férhetsz majd hozzá általa!</b>
		</p>
		<p class="text-center mb-4 font-normal text-[#E1D5CA] font-[Manrope]">
			Például hamarabb hallhatod majd az új anyagainkat, olcsóbban vehetsz jegyet a koncertjeinkre,
			meg amit még kitalálunk. Nem mellesleg nagyon menő, és később fizikai kitűző formájában is
			birtokolhatod!
		</p>
		<p class="text-center mb-10 font-normal text-[#E1D5CA] font-[Manrope]">
			Most csak az email címedre van hozzá szükség, és hogy a következő oldalon a
			<i> Mint </i>
			gombra nyomj, amit <b>holnap estig tehetsz meg</b>. A továbbiakról szólni fogunk 🖖🏻
		</p>
		<div class="inline-block flex items-end pb-8 opacity-25">
			<label class="w-full"
				><!-- Add meg az emailed! -->
				<input
					required
					disabled
					type="email"
					name="email"
					placeholder="jofejvagyok@gmail.com"
					class="rounded-lg block h-12  mt-1 w-full bg-[#282727] border-[#3f3e3e]"
				/>
			</label>
			<button disabled class="rounded-lg px-5 h-12 bg-[#927470] ml-2 font-[Anton] text-[#E1D5CA]"
				>Mehet</button
			>
		</div>
		<p class="text-center mb-10 font-normal text-[#E1D5CA] font-[Manrope]">
			A claimelés lejárt. Ha ott voltál de lemaradtál, küldd el nekünk a jegyed Instagramon!
		</p>
	</div>
</section>
<p class="text-center  font-normal text-[#5c5c5c] font-[Manrope] py-8">
	Instagram / Facebook: @domingozenekar
</p>
