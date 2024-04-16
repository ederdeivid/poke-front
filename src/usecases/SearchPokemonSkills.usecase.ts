import Services from '@/services/Services';
import { AbilityDetails, AbilityRequestDetails, EffectEntries } from '@/types/PokemonApiRequestTypes';

export default class SearchPokemonSkillsUseCase {
  private skills: AbilityRequestDetails[] = [];
  private lalala = [];

  constructor (private services: Services) { };

  public async execute (skillsList: Array<{ name: string; id: string; }>) {
    this.skills = await Promise.all(skillsList.map(skill => this.searchSkills(skill.id)));
    console.log(this.getSkillsFilteredOnlyByEN());
  }

  private searchSkills (skillId: string): Promise<AbilityRequestDetails> {
    return this.services.pokemons.searchBySkillId(skillId);
  }

  private getSkillsFilteredOnlyByEN (): AbilityRequestDetails[] {
    return this.skills.map((skill: AbilityRequestDetails) => ({
      id: skill.id,
      name: skill.name,
      effect_entries: this.searchENLanguageSkill(skill.effect_entries as EffectEntries[])
    }));
  }

  private searchENLanguageSkill (effectsInfo: EffectEntries[]): EffectEntries {
    return effectsInfo.find(effectInfo => effectInfo.language.name === 'en') as EffectEntries;
  }

  private idk () {}
}