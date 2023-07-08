export class TicketRepository{
    
    constructor(dao){
        this.dao = dao;
    }

    async addTicket(amount, purchaser){
        const result = await this.dao.post(amount, purchaser);
        return result;
    }

    async getTickets(){
        const result = await this.dao.get();
        return result;
    }
}