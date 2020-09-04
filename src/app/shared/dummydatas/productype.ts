import { ProductType } from "../interfaces/product-type"

export const prodtypes: ProductType[] = [
    {label: 'Power Tools', slug: 'power-tools', active:true, id:'random-string-101', child: 
		[
			{label: 'Workbenches', slug: 'workbenches', active:true, id:'random-string-102'},
			{label: 'Presses', slug: 'presses', active:true, id:'random-string-103'},
			{label: 'Spray Guns',slug: 'sprayguns', active:true, id:'random-string-104'},
			{label: 'Riveters',slug: 'riveters', active:true, id:'random-string-105', child:[
				{label: 'ASD', slug: 'asd', active:true, id:'random-string-121'},
				{label: 'DFG', slug: 'dfg', active:true, id:'random-string-122'},
				{label: 'ÍYX', slug: 'iyx', active:true, id:'random-string-123'},
			]},
		]},
	{label: 'Power Machinery', slug: 'power-machinery', active:true, id:'random-string-110'}
];
