
    it('appointment request',() => {
           var appointmentRequest = element(by.xpath("//a[@id = 'AtAppointmentLink']/h2[contains(.,'Appointment request')]")).click();
    });

    it('phone select',() => {
         var phone = element(by.xpath("//label[@class = 'global-services__label']/span[contains(.,'Phone')]")).click();
    });

    

});