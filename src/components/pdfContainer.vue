<template>
    <div class="row" >
        <div class="col-md-12" style="text-align: center;background-color: darkgray;padding-top:5px">
            <canvas id="the-canvas" class="pdfViewer">
            </canvas>
        </div>
    </div>
</template>

<script>
import { clsPDFViewer } from '../code/clsPDFViewer'

export default {
    name : 'pdfContainer'
    ,props : {
        viewer : clsPDFViewer
    }
    ,data (){
        
        return {}
    }
    ,mounted : function(){
        
        this.viewer.setCanvas(document.getElementById('the-canvas'));
        
        
    }
}
</script>