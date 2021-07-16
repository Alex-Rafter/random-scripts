const shell = require('shelljs')

const arr = [
    {
        brand: 'fiat',
        ctaOne: {
            text: 'Value Your Car',
            link: '/fiat/value-your-car/?Make=<%=Manufacturer.Text%>&amp;Model=<%=Model.Text%> <%=Version.Text%> <%=BodyType.Text%>&amp;Reg=<%=RegNumber.Text%>&amp;Dealership=<%=DealerID.Text%>'
        },
        ctaTwo: {
            text: 'Print Details',
            link: '/COG/COGPDF/COGCreatePDF.aspx?INCLUDE=_PRINT&ID=<%=Stock_ID.Text %>'
        }
    },
    {
      brand: 'peugeot',
      ctaOne: {
          text: 'Value Your Car',
          link: '/peugeot/value-your-car/?Make=<%=Manufacturer.Text%>&amp;Model=<%=Model.Text%> <%=Version.Text%> <%=BodyType.Text%>&amp;Reg=<%=RegNumber.Text%>&amp;Dealership=<%=DealerID.Text%>'
      },
      ctaTwo: {
          text: 'Print Details',
          link: '/COG/COGPDF/COGCreatePDF.aspx?INCLUDE=_PRINT&ID=<%=Stock_ID.Text %>'
      }
  },
  {
    brand: 'mazda',
    ctaOne: {
        text: 'Value Your Car',
        link: '/mazda/value-your-car/?Make=<%=Manufacturer.Text%>&amp;Model=<%=Model.Text%> <%=Version.Text%> <%=BodyType.Text%>&amp;Reg=<%=RegNumber.Text%>&amp;Dealership=<%=DealerID.Text%>'
    },
    ctaTwo: {
        text: 'Print Details',
        link: '/COG/COGPDF/COGCreatePDF.aspx?INCLUDE=_PRINT&ID=<%=Stock_ID.Text %>'
    }
},

{
  brand: 'citroen',
  ctaOne: {
      text: 'Value Your Car',
      link: '/citroen/value-your-car/?Make=<%=Manufacturer.Text%>&amp;Model=<%=Model.Text%> <%=Version.Text%> <%=BodyType.Text%>&amp;Reg=<%=RegNumber.Text%>&amp;Dealership=<%=DealerID.Text%>'
  },
  ctaTwo: {
      text: 'Print Details',
      link: '/COG/COGPDF/COGCreatePDF.aspx?INCLUDE=_PRINT&ID=<%=Stock_ID.Text %>'
  }
}


]

arr.forEach(item => {
    /*html*/
    let newHtml = `
    <div class="grey-bg">
    <div class="container">
      <div class="row mgn-bottom-30 mgn-top-30">
        <div class="col-md-4 col-sm-12">
          <%  DealerAddressTop.DealerID = DealerID.Text
                    DealerAddressTop.LoadData()
                    %>
          <COG:COGDealerRepeater_V1 ID="DealerAddressTop" runat="server"
            Template="/${item.brand}/COGTemplates/DealerAddress.ascx" />
        </div>

        <div class="col-md-8 col-sm-12 mgn-top-10 no-pad">
          <div class="main-ctas">
            <div class="row main-ctas__row">
             
        <%If ATCanReserve.Text = "True" %>
        <COG:AutoTransactCTAButton runat="server" Intent="Reservation" CssClass="col-sm-6 col-xs-12 mgn-bottom-10">
         <div class="btn btn-primary col-xs-12">Reserve for <%= ATReservationFee.Text %></div>
        </COG:AutoTransactCTAButton>
        <%End If %>
                
        <% Dim DynamicCSSForCTAs As String = IIf((ATCanReserve.Text = "True"), "col-sm-3 col-xs-12", "col-sm-6 col-md-3 col-xs-12") %>
        <% Dim DynamicOffset As String = IIf((ATCanReserve.Text = "True"), "", "col-md-offset-6") %>
              <a class="<%=DynamicCSSForCTAs%> <%=DynamicOffset%> mgn-bottom-10"
                href="${item.ctaOne.link}">
                <div class="btn btn-secondry col-xs-12">${item.ctaOne.text}</div>
              </a>
              <a class="<%=DynamicCSSForCTAs%>"
                href="${item.ctaTwo.link}">
                <div class="btn btn-secondry col-xs-12">${item.ctaTwo.text}</div>
              </a>
            </div>
          </div>

   
      </div>
    </div><!-- Row End -->
  </div><!-- container End -->
  </div><!-- Grey BG End -->

`
    // shell.echo(newHtml)
    shell.echo(newHtml).toEnd(`${item.brand}-ctas.html`);
})