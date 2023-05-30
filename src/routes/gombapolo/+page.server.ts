import { supabase } from '$lib/supabaseClient';
import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const email = data.get('email');

		const { data: dbData } = await supabase
			.from('links')
			.select('url')
			.eq('poap', 'gombapolo')
			.is('email', null)
			.limit(1);
		const url = dbData?.[0]?.url;
		if (!url) return;

		const { error } = await supabase.from('links').update({ email }).eq('url', url);
		if (error) return;

		throw redirect(301, `${url}?address=${email}`);
	}
} satisfies Actions;
