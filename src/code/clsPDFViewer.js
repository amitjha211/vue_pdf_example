export  class clsPDFViewer
{

    sLink = "amit jha";
    _pdf = null;
    _canvas = null;                
    
    constructor()
    {
        
        this.currentPage = 1;
        this.totalPages = 0
        this.error = false;
        this.pages = [];
        this.busy = false;
        this.progressPer = 0;
        
    }


    setCanvas(oCanvas) {
        this._canvas = oCanvas;
    }

    onFileLoad(){
     //Do nothing;   
    }

    fillPagesInfo() {
        
        for(var i = 0; i < this.totalPages; i++) {
            
            var jn = { pageNumber : i+1 };
            
            this.pages.push(jn);
            
        }
    }


    viewPage() {
        let self = this;
        this.busy = true;
        this._pdf.getPage(this.currentPage).then(function (page) {
            // you can now use *page* here
            var scale = 1.5;
            
            var viewport = page.getViewport(scale);

            //var canvas = document.getElementById('the-canvas');
            var context = self._canvas.getContext('2d');
            self._canvas.height = viewport.height;
            self._canvas.width = viewport.width;

            var renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            
            page.render(renderContext);
            self.busy=false;
        });
    }

    viewPageByIndex(iIndex)    {
        this.currentPage = iIndex;
        this.viewPage();
    }


    loadPDF() {
        
        var self  = this;
        
        var _progress = function(objProgress){
            self.progressPer = (objProgress.loaded / objProgress.total) * 100;
            
            if(self.onFileLoad) 
                self.onFileLoad();
            
        }
        
        PDFJS.getDocument( { url : this.sLink }, false, null, _progress ).then(function(pdf) {
            self._pdf = pdf;
            self.totalPages = self._pdf.numPages;
            self.fillPagesInfo();
            self.viewPage();
            //$scope.$apply();
            if($.isFunction(self.onFileLoad)) self.onFileLoad();
            
        }).catch(function(error) {
            alert(error);
        });
    }

    setPDFLink(_Link) {
        this.sLink = _Link;
        //this.loadPDF()
    }

    reset() {
        this.currentPage = 1;
        this.viewPage();
    }

    next() {
        if (this.currentPage >= (this.totalPages)) {
            alert("You are on the last page !")
            return;
            
        }
        
        this.currentPage += 1;
        this.viewPage();
    }

    previous () {
        if (this.currentPage == 1) {
            alert("You are on the first page !")
            return;
        }

        this.currentPage -= 1;
        this.viewPage();
    }    

} 

