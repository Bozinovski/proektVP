package mk.finki.ukim.mk.proekt.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class Rezervacii {

    @Id
    private Long id;

    private Long proekcijaId;
    private Long korisnikId;

    public Rezervacii() {
    }
    public Rezervacii(Long proekcijaId, Long korisnikId) {
        this.proekcijaId = proekcijaId;
        this.korisnikId = korisnikId;
    }

}
