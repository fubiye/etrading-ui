import { MatIconRegistry } from '@ANGULAR/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
    ir.addSvgIcon('tradingExchange', ds.bypassSecurityTrustResourceUrl('../../assets/images/trading.svg'));
};