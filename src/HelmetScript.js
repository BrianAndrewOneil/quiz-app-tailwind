import React from 'react';
import { Helmet } from "react-helmet";

export default function HelmetScript() {
   return (
   <div>
   <Helmet>
        <script
            src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/flowbite.min.js"
            type="text/javascript"
            async
        />
        {console.log('success! helmet loaded.')}
    </Helmet>
    </div>
   )
}