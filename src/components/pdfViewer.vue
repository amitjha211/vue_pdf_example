<template>

<div class="row">
    <div class="col-md-12">

        <pdfTopMenu v-bind:viewer="viewer" />
        <pdfContainer v-bind:viewer="viewer" />
    </div>
</div>

</template>

<script>

import { clsPDFViewer } from '../code/clsPDFViewer'
import  pdfContainer from './pdfContainer'
import pdfTopMenu  from './pdfTopMenu'

export default {

    name : 'pdfViewer'
    , components : { pdfContainer, pdfTopMenu }
    ,props : {
        link : String
    }
    ,data(){
        
        let _viewer = new  clsPDFViewer( this.link);
        return { viewer : _viewer };
    }
    ,methods : {
        test1(){
            this.viewer.loadPDF();
        }
    }
    ,mounted (){
        this.viewer.setPDFLink(this.link);
        this.viewer.loadPDF();
    }
    
}
</script>
<style scoped>

</style>